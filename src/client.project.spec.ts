// @vitest-environment node

import { afterEach, describe, expect, it, vi } from "vitest"

import Client from "./client"
import { Resources } from "./resources"
import { RequestOptionsVCluster } from "./types"

const vClusterOptions: RequestOptionsVCluster = {
  project: "default",
  cluster: "loft-cluster",
  namespace: "p-default",
  name: "vcluster-h4nkm",
}

const projectOptions = { project: "default", virtualCluster: "vcluster-h4nkm" }

describe("Client.project tenant cluster paths", () => {
  const client = new Client(undefined, "http://localhost:8080")

  it("builds tenant cluster API paths under /kubernetes/project/{project}/virtualcluster/{name}", () => {
    const path = client.project(projectOptions, Resources.V1Pod).ResolvePath()

    expect(path.err).toBe(false)
    expect(path.val).toBe(
      "/kubernetes/project/default/virtualcluster/vcluster-h4nkm/api/v1/pods?timeout=180s"
    )
  })

  it("supports namespaced subresources from the Linear repro path", () => {
    const path = client
      .project(projectOptions, Resources.V1Pod)
      .Namespace("kube-system")
      .ResolvePath()

    expect(path.err).toBe(false)
    expect(path.val).toBe(
      "/kubernetes/project/default/virtualcluster/vcluster-h4nkm/api/v1/namespaces/kube-system/pods?timeout=180s"
    )
  })

  it("supports grouped API discovery paths", () => {
    const path = client
      .project(projectOptions, {
        group: "storage.k8s.io",
        version: "v1",
        resource: "storageclasses",
        kind: "StorageClass",
      })
      .ResolvePath()

    expect(path.err).toBe(false)
    expect(path.val).toBe(
      "/kubernetes/project/default/virtualcluster/vcluster-h4nkm/apis/storage.k8s.io/v1/storageclasses?timeout=180s"
    )
  })

  it("does not use the legacy /kubernetes/virtualcluster/{cluster}/{namespace}/{name} path", () => {
    const path = client.project(projectOptions, Resources.V1Pod).ResolvePath()

    expect(path.err).toBe(false)
    expect(path.val).not.toContain("/kubernetes/virtualcluster/")
    expect(path.val).not.toContain("/loft-cluster/")
    expect(path.val).not.toContain("/p-default/")
  })

  it("routes auto() through project() when only vCluster options are provided", () => {
    const autoPath = client
      .auto(undefined, vClusterOptions, undefined, Resources.V1Pod)
      .ResolvePath()
    const projectPath = client.project(projectOptions, Resources.V1Pod).ResolvePath()

    expect(autoPath.val).toBe(projectPath.val)
  })

  it("builds non-resource paths for API discovery", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({}),
    })
    vi.stubGlobal("fetch", fetchMock)

    await client
      .autoNonResource(undefined, vClusterOptions, undefined)
      .Path("apis/storage.k8s.io/v1")

    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:8080/kubernetes/project/default/virtualcluster/vcluster-h4nkm/apis/storage.k8s.io/v1",
      expect.objectContaining({ credentials: "same-origin" })
    )
  })
})

afterEach(() => {
  vi.unstubAllGlobals()
})
