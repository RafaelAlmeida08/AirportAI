import { GetProduct, IGetProductByDescription } from '@/domain/features'

export class GetProductByDescriptionService implements IGetProductByDescription {
  private readonly getProductByDescriptionRepository: any
  constructor (getProductByDescriptionRepository: any) {
    this.getProductByDescriptionRepository = getProductByDescriptionRepository
  }

  async execute (param: GetProduct.Params): Promise<GetProduct.Result> {
    return await this.getProductByDescriptionRepository.find(param)
  }
}
