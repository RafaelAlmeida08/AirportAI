import { IGetProduct } from '@/domain/features'
import { ok } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class GetProductController implements Controller {
  private readonly getProductService: IGetProduct
  constructor (getProductService: IGetProduct) {
    this.getProductService = getProductService
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    const { id } = request.params
    const product = await this.getProductService.execute(id)
    return ok(product)
  }
}