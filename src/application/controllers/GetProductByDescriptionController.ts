import { IGetProductByDescription } from '@/domain/features'
import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class GetProductByDescriptionController implements Controller {
  private readonly getProductByDescription: IGetProductByDescription
  constructor (getProductByDescription: IGetProductByDescription) {
    this.getProductByDescription = getProductByDescription
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      const product = await this.getProductByDescription.execute(request.query.description)
      return ok(product)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
