import { GetProductByDescriptionController } from '@/application/controllers'
import { GetProductByDescriptionService } from '@/data/services'
import { LogErrorMongoRepository } from '@/infra/db/mongodb/repositories'
import { GetProductByDescriptionMongoRepository } from '@/infra/db/mongodb/repositories/GetProductByDescriptionRepository'
import { Controller } from '@/presentation/protocols'
import { LogControllerDecorator } from '../decorators'

export const makeGetProductByDescriptionController = (): Controller => {
  const getProductByDescriptionMongoRepository = new GetProductByDescriptionMongoRepository()
  const getProductByDescriptionService = new GetProductByDescriptionService(getProductByDescriptionMongoRepository)
  const logErrorMongoRepository = new LogErrorMongoRepository()
  const getProductByDescriptionController = new GetProductByDescriptionController(getProductByDescriptionService)
  return new LogControllerDecorator(getProductByDescriptionController, logErrorMongoRepository)
}
