import { AccessDeniedError } from '@/presentation/erros'
import { forbidden, unauthorized, ok } from '@/presentation/helpers'
import { HttpResponse, Middleware } from '@/presentation/protocols'
import { ITokenValidator } from '@/validation/protocols/TokenValidator'

export class AuthMiddleware implements Middleware {
  constructor (private readonly validator: ITokenValidator) { }

  async handle (httpRequest: AuthMiddleware.Request): Promise<HttpResponse> {
    const { accessToken } = httpRequest

    if (!accessToken) {
      return forbidden(new AccessDeniedError())
    }

    const [, token] = accessToken.split(' ')

    try {
      this.validator.isValid(token)
      return ok()
    } catch (error) {
      return unauthorized()
    }
  }
}
export namespace AuthMiddleware {
  export type Request = {
    accessToken?: string
  }
}
