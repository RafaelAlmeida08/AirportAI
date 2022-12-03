import { GetProduct, IGetProduct } from '@/domain/features'
import { GetProductMongoRepository } from '@/infra/db/mongodb/repositories'

export class GetProductService implements IGetProduct {
  private readonly getProductRepository: GetProductMongoRepository
  constructor (getProductRepository: GetProductMongoRepository) {
    this.getProductRepository = getProductRepository
  }

  async execute (id: GetProduct.Params): Promise<GetProduct.Result> {
    return await this.getProductRepository.find(id)
  }
}
