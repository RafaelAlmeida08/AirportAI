import { DeleteProduct, IDeleteProduct } from '@/domain/features'
import { DeleteProductMongoRepository } from '@/infra/db/mongodb/repositories'

export class DeleteProductService implements IDeleteProduct {
  private readonly deleteProductRepository: DeleteProductMongoRepository
  constructor (deleteProductRepository: DeleteProductMongoRepository) {
    this.deleteProductRepository = deleteProductRepository
  }

  async execute (param: DeleteProduct.Param): Promise<DeleteProduct.Result> {
    return await this.deleteProductRepository.delete(param)
  }
}
