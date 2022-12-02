import { ICreateProduct } from '@/domain/features'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class CreateProductController implements Controller {
  private readonly createProductService: ICreateProduct
  constructor (createProductService: ICreateProduct) {
    this.createProductService = createProductService
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, color, lostTime } = request.body
      await this.createProductService.execute({ name, color, lostTime })
      return {
        statusCode: 200
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: new Error('Internal server error')
      }
    }
  }
}
