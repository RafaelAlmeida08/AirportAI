import { forbidden } from '@/presentation/helpers'
import { AuthMiddleware } from '@/application/middlewares'
import { AccessDeniedError } from '@/presentation/erros'
import { ITokenValidator } from '@/validation/protocols'
import { TokenValidator } from '@/validation/validators/TokenValidator'

describe('Aith Middleware', () => {
  let validator: ITokenValidator
  let sut: AuthMiddleware

  beforeEach(() => {
    validator = new TokenValidator()
    sut = new AuthMiddleware(validator)
  })

  it('Should return 403 if no token is provided', async () => {
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })
})
