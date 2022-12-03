import { CreateProductController } from '@/controllers'
import { CreateProductService } from '@/data/services'
import { CreateProductMongoRepository } from '@/infra/db/mongodb'

export const makeCreateProductController = (): CreateProductController => {
  const createProductMongoRepository = new CreateProductMongoRepository()
  const createProductService = new CreateProductService(createProductMongoRepository)
  return new CreateProductController(createProductService)
}
