import { AuthMiddleware } from '@/application/middlewares'
import { Middleware } from '@/presentation/protocols'
import { TokenValidator } from '@/validation/validators/TokenValidator'

export const makeAuthMiddleware = (): Middleware => {
  const validator = new TokenValidator()
  return new AuthMiddleware(validator)
}
