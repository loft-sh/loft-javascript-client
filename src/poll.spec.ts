import { afterEach, describe, expect, it, vi } from "vitest"

import { pollResult, PollResult, pollUntil } from "./poll"
import { ErrorTypeForbidden, ErrorTypeNotFound, Return } from "./result"

describe("pollUntil", () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it("returns the value as soon as the attempt is done", async () => {
    const attempt = vi.fn(
      async (): Promise<PollResult<string>> => ({ status: "done", value: "ready" })
    )

    await expect(pollUntil(attempt)).resolves.toBe("ready")
    expect(attempt).toHaveBeenCalledTimes(1)
  })

  it("retries while the attempt asks to continue", async () => {
    vi.useFakeTimers()
    const attempt = vi
      .fn<() => Promise<PollResult<string>>>()
      .mockResolvedValueOnce({ status: "retry" })
      .mockResolvedValueOnce({ status: "done", value: "ready" })

    const pending = pollUntil(attempt)
    await vi.advanceTimersByTimeAsync(400)

    await expect(pending).resolves.toBe("ready")
    expect(attempt).toHaveBeenCalledTimes(2)
  })

  it("gives up after the timeout while the attempt is still retrying", async () => {
    vi.useFakeTimers()
    const attempt = vi.fn(async (): Promise<PollResult<string>> => ({ status: "retry" }))

    const pending = pollUntil(attempt)
    await vi.advanceTimersByTimeAsync(10_000)

    await expect(pending).resolves.toBeUndefined()
  })

  it("stops when the attempt asks to stop", async () => {
    vi.useFakeTimers()
    const attempt = vi.fn(async (): Promise<PollResult<string>> => ({ status: "stop" }))

    const pending = pollUntil(attempt)
    await vi.advanceTimersByTimeAsync(10_000)

    await expect(pending).resolves.toBeUndefined()
    expect(attempt).toHaveBeenCalledTimes(1)
  })
})

describe("pollResult", () => {
  it("finishes when the result is present", () => {
    expect(pollResult(Return.Value("ready"))).toEqual({ status: "done", value: "ready" })
  })

  it("retries when the result is not found", () => {
    expect(pollResult(Return.Failed("missing", "", ErrorTypeNotFound))).toEqual({ status: "retry" })
  })

  it("stops on any other error", () => {
    expect(pollResult(Return.Failed("nope", "", ErrorTypeForbidden))).toEqual({ status: "stop" })
  })
})
