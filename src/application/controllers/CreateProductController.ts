import { ICreateProduct } from '@/domain/features'
import { MissingParamError } from '@/presentation/erros'
import { badRequest, created, serverError } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class CreateProductController implements Controller {
  private readonly createProductService: ICreateProduct
  constructor (createProductService: ICreateProduct) {
    this.createProductService = createProductService
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, color, description, lostTime } = request.body
      if (!name) {
        return badRequest(new MissingParamError('name'))
      }
      if (!color) {
        return badRequest(new MissingParamError('color'))
      }
      if (!description) {
        return badRequest(new MissingParamError('name'))
      }
      if (!lostTime) {
        return badRequest(new MissingParamError('lostTime'))
      }
      const product = await this.createProductService.execute({ name, color, description, lostTime })
      return created(product)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
