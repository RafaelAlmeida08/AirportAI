import { CreateProductController } from '@/controllers'
import { CreateProductService } from '@/data/services'
import { ProductMongoRepository } from '@/infra/db/mongodb'

export const makeCreateProductController = (): CreateProductController => {
  const productMongoRepository = new ProductMongoRepository()
  const createProductService = new CreateProductService(productMongoRepository)
  return new CreateProductController(createProductService)
}
