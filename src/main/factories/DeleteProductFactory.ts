import { DeleteProductController } from '@/application/controllers'
import { DeleteProductService } from '@/data/services/DeleteProductService'
import { DeleteProductMongoRepository, LogErrorMongoRepository } from '@/infra/db/mongodb/repositories'
import { Controller } from '@/presentation/protocols'
import { LogControllerDecorator } from '@/main/decorators'

export const makeDeleteProductController = (): Controller => {
  const deleteProductRepository = new DeleteProductMongoRepository()
  const deleteProductService = new DeleteProductService(deleteProductRepository)
  const deleteProductController = new DeleteProductController(deleteProductService)
  const logErrorMongoRepository = new LogErrorMongoRepository()
  return new LogControllerDecorator(deleteProductController, logErrorMongoRepository)
}
