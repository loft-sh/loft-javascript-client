export class Err<E> {
  readonly ok = false
  readonly err = true

  constructor(public readonly val: E, public extra: any = undefined) {}
}

export class Ok<T> {
  readonly ok = true
  readonly err = false

  constructor(public readonly val: T, public extra: any = undefined) {}
}

export type ResultError = Ok<undefined> | Err<Failed>
export type Result<T> = Ok<T> | Err<Failed>
export function isResult<T>(arg: object): arg is Result<T> {
  return "ok" in arg && typeof arg.ok === "boolean" && "err" in arg && typeof arg.err === "boolean"
}

export type ErrorType = string

export const ErrorTypeUnknown: ErrorType = ""
export const ErrorTypeNetwork: ErrorType = "Network"
export const ErrorTypeForbidden: ErrorType = "Forbidden"
export const ErrorTypeBadRequest: ErrorType = "BadRequest"
export const ErrorTypeNotFound: ErrorType = "NotFound"
export const ErrorTypeUnauthorized: ErrorType = "Unauthorized"
export const ErrorTypeAlreadyExists: ErrorType = "AlreadyExists"
export const ErrorTypeInternalError: ErrorType = "InternalServerError"
export const ErrorTypeNotImplemented: ErrorType = "NotImplemented"
export const ErrorTypeBadGateway: ErrorType = "BadGateway"
export const ErrorTypeServiceUnavailable: ErrorType = "ServiceUnavailable"
export const ErrorTypeGatewayTimeout: ErrorType = "GatewayTimeout"

export const MapErrorCode = (code: number): ErrorType => {
  switch (code) {
    case 400:
      return ErrorTypeBadRequest
    case 401:
      return ErrorTypeUnauthorized
    case 403:
      return ErrorTypeForbidden
    case 404:
      return ErrorTypeNotFound
    case 409:
      return ErrorTypeAlreadyExists
    case 500:
      return ErrorTypeInternalError
    case 501:
      return ErrorTypeNotImplemented
    case 502:
      return ErrorTypeBadGateway
    case 503:
      return ErrorTypeServiceUnavailable
    case 504:
      return ErrorTypeGatewayTimeout
  }

  return ErrorTypeUnknown
}

export class Return {
  static Ok() {
    return new Ok<undefined>(undefined)
  }

  static Value<E>(val: E) {
    return new Ok<E>(val)
  }

  static Failed(
    message: string,
    reason: string = "",
    type: ErrorType = ErrorTypeUnknown,
    extra: any = undefined
  ) {
    return new Err<Failed>(new Failed(message, type, reason), extra)
  }

  static Error<E>(val: E): Err<E> {
    return new Err<E>(val)
  }

  static WithExtra<T>(result: Result<T>, extra: any = undefined): Result<T> {
    result.extra = extra

    return result
  }
}

export class Failed {
  constructor(
    public readonly message: string,
    public readonly type: ErrorType = ErrorTypeUnknown,
    public readonly reason: string = ""
  ) {}
}
