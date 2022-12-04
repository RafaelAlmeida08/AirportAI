import { IDeleteProduct } from '@/domain/features'
import { noContent, serverError } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class DeleteProductController implements Controller {
  private readonly deleteProductService: IDeleteProduct
  constructor (deleteProductService: IDeleteProduct) {
    this.deleteProductService = deleteProductService
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = request.params
      await this.deleteProductService.execute(id)
      return noContent()
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
