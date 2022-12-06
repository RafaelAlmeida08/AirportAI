export interface ITokenValidator {
  isValid: (param: TValidator.Param) => TValidator.Result
}

export namespace TValidator{
  export type Param = string
  export type Result = any
}
