import { verify } from 'jsonwebtoken'
import { ITokenValidator } from '../protocols'

export class TokenValidator implements ITokenValidator {
  isValid (token: string): any {
    return verify(token, '123456')
  }
}
