import { ICreateProduct } from '@/domain/features'
import { MissingParamError } from '@/presentation/erros'
import { badRequest, created, serverError } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class CreateProductController implements Controller {
  constructor (private readonly createProductService: ICreateProduct) {}

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name', 'color', 'description', 'lostTime']
      for (const field of requiredFields) {
        if (!request.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const { name, color, description, lostTime } = request.body
      const product = await this.createProductService.execute({ name, color, description, lostTime })

      return created(product)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
