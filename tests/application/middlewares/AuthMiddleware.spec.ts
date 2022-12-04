import { AccessDeniedError, forbidden } from '@/presentation/helpers'
import { AuthMiddleware } from '@/application/middlewares'

describe('Aith Middleware', () => {
  let sut: AuthMiddleware

  beforeEach(() => {
    sut = new AuthMiddleware()
  })

  it('Should return 403 if no x-access-token is provided', async () => {
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })
})
