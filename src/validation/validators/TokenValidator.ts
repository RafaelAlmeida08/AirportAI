import env from '@/main/config/env'
import { verify } from 'jsonwebtoken'
import { ITokenValidator, TValidator } from '@/validation/protocols'

export class TokenValidator implements ITokenValidator {
  isValid (token: TValidator.Param): TValidator.Result {
    return verify(token, env.tokenKey)
  }
}
