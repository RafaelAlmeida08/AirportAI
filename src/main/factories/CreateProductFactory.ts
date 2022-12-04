import { CreateProductController } from '@/application/controllers'
import { CreateProductService } from '@/data/services'
import { CreateProductMongoRepository } from '@/infra/db/mongodb'
import { Controller } from '@/presentation/protocols'
import { LogControllerDecorator } from '@/main/decorators'

export const makeCreateProductController = (): Controller => {
  const createProductMongoRepository = new CreateProductMongoRepository()
  const createProductService = new CreateProductService(createProductMongoRepository)
  const createProductController = new CreateProductController(createProductService)
  return new LogControllerDecorator(createProductController)
}
