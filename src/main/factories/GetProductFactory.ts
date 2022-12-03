import { GetProductController } from '@/controllers'
import { GetProductService } from '@/data/services'
import { GetProductMongoRepository } from '@/infra/db/mongodb/repositories'

export const makeGetProductController = (): GetProductController => {
  const getProductMongoRepository = new GetProductMongoRepository()
  const getProductService = new GetProductService(getProductMongoRepository)
  return new GetProductController(getProductService)
}
