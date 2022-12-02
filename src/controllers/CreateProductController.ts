import { ICreateProduct } from '@/domain/features'
import { created, serverError } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class CreateProductController implements Controller {
  private readonly createProductService: ICreateProduct
  constructor (createProductService: ICreateProduct) {
    this.createProductService = createProductService
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, color, lostTime } = request.body
      const product = await this.createProductService.execute({ name, color, lostTime })
      return created(product)
    } catch (error) {
      return serverError()
    }
  }
}
