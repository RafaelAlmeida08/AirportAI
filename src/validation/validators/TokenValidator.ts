import env from '@/main/config/env'
import { verify } from 'jsonwebtoken'
import { ITokenValidator } from '../protocols'

export class TokenValidator implements ITokenValidator {
  isValid (token: string): any {
    return verify(token, env.tokenKey)
  }
}
