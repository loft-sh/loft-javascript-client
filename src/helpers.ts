export function arr<T>(array: T[] | undefined | null): T[] {
  return !array ? [] : array
}
