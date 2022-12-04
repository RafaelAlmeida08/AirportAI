import { CreateProductController } from '@/application/controllers'
import { CreateProductService } from '@/data/services'
import { CreateProductMongoRepository } from '@/infra/db/mongodb'
import { Controller } from '@/presentation/protocols'
import { LogControllerDecorator } from '@/main/decorators'
import { LogErrorMongoRepository } from '@/infra/db/mongodb/repositories'

export const makeCreateProductController = (): Controller => {
  const createProductMongoRepository = new CreateProductMongoRepository()
  const createProductService = new CreateProductService(createProductMongoRepository)
  const createProductController = new CreateProductController(createProductService)
  const logErrorMongoRepository = new LogErrorMongoRepository()
  return new LogControllerDecorator(createProductController, logErrorMongoRepository)
}
