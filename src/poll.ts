import { ErrorTypeNotFound, Result } from "./result"

const DEFAULT_POLL_TIMEOUT_MS = 10_000
const DEFAULT_POLL_INTERVAL_MS = 400

export type PollResult<T> = { status: "done"; value: T } | { status: "retry" } | { status: "stop" }

export function pollResult<T>(result: Result<T>): PollResult<T> {
  if (result.ok) {
    return { status: "done", value: result.val }
  }

  if (result.val.type === ErrorTypeNotFound) {
    return { status: "retry" }
  }

  return { status: "stop" }
}

export async function pollUntil<T>(
  attempt: () => Promise<PollResult<T>>,
  {
    timeoutMs = DEFAULT_POLL_TIMEOUT_MS,
    intervalMs = DEFAULT_POLL_INTERVAL_MS,
  }: { timeoutMs?: number; intervalMs?: number } = {}
): Promise<T | undefined> {
  const started = Date.now()
  let polling = true
  let value: T | undefined

  while (polling) {
    const result = await attempt()
    if (result.status === "done") {
      value = result.value
      polling = false
      continue
    }
    if (result.status === "stop" || Date.now() - started >= timeoutMs) {
      polling = false
      continue
    }

    await new Promise<void>((resolve) => setTimeout(resolve, intervalMs))
  }

  return value
}
