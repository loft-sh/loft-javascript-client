// @vitest-environment node

import { ManagementV1SelfSubjectAccessReview } from "@gen/models/managementV1SelfSubjectAccessReview"
import { V1ResourceAttributes } from "@gen/models/V1ResourceAttributes"
import { V1SubjectAccessReviewStatus } from "@gen/models/V1SubjectAccessReviewStatus"
import { afterEach, describe, expect, it, vi } from "vitest"

import Client from "./client"
import { arrStrict } from "@loft-enterprise/shared"

const REVIEW_URL =
  "http://localhost:8080/kubernetes/management/apis/management.loft.sh/v1/selfsubjectaccessreviews?timeout=180s"

function review(resource: string): V1ResourceAttributes {
  return { verb: "create", group: "management.loft.sh", version: "v1", resource }
}

function jsonResponse(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}

function failureStatus(code: number, reason: string) {
  return { apiVersion: "v1", kind: "Status", status: "Failure", code, reason, message: reason }
}

// Each request answers from its own body, so an answer can be checked against its review.
function stubReviewEndpoint(
  verdict: (attributes: V1ResourceAttributes | undefined) => V1SubjectAccessReviewStatus
) {
  const fetchMock = vi.fn(async (_url: string, init: RequestInit) => {
    const body: ManagementV1SelfSubjectAccessReview = JSON.parse(String(init.body))

    return jsonResponse(201, {
      apiVersion: "management.loft.sh/v1",
      kind: "SelfSubjectAccessReview",
      status: {
        allowed: false,
        statuses: arrStrict(body.spec?.reviews).map((r) => verdict(r.resourceAttributes)),
      },
    })
  })
  vi.stubGlobal("fetch", fetchMock)

  return fetchMock
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe("canIBatch", () => {
  it("answers each review in order from one request", async () => {
    const fetchMock = stubReviewEndpoint((r) => ({ allowed: r?.resource !== "clusters" }))
    const client = new Client(undefined, "http://localhost:8080")

    const result = await client.canIBatch([review("projects"), review("clusters"), review("users")])

    expect(fetchMock.mock.calls.map(([url]) => url)).toEqual([REVIEW_URL])
    expect(result.val).toEqual([true, false, true])
  })

  it("splits reviews above the endpoint limit into more requests and keeps their order", async () => {
    const fetchMock = stubReviewEndpoint((r) => ({ allowed: r?.resource === "last" }))
    const client = new Client(undefined, "http://localhost:8080")
    const reviews = [...Array.from({ length: 1024 }, () => review("projects")), review("last")]

    const result = await client.canIBatch(reviews)

    const reviewCounts = fetchMock.mock.calls.map(([, init]) => {
      const body: ManagementV1SelfSubjectAccessReview = JSON.parse(String(init.body))

      return arrStrict(body.spec?.reviews).length
    })
    expect(reviewCounts).toEqual([1024, 1])
    expect(result.val).toEqual([...Array.from({ length: 1024 }, () => false), true])
  })

  it("returns an error when the server answers without statuses", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () =>
        jsonResponse(201, {
          apiVersion: "management.loft.sh/v1",
          kind: "SelfSubjectAccessReview",
          status: { allowed: false },
        })
      )
    )
    const client = new Client(undefined, "http://localhost:8080")

    const result = await client.canIBatch([review("projects"), review("clusters")])

    expect(result.err).toBe(true)
  })

  it("returns the error of a failed request", async () => {
    const fetchMock = vi.fn(async () => jsonResponse(500, failureStatus(500, "InternalError")))
    vi.stubGlobal("fetch", fetchMock)
    const client = new Client(undefined, "http://localhost:8080")

    const result = await client.canIBatch([review("projects"), review("clusters")])

    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(result.err).toBe(true)
  })
})
