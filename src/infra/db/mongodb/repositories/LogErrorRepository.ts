import { ILogErrorRepository } from '@/data/protocols/error'
import { MongoHelper } from '@/infra/db/mongodb/helpers'

export class LogErrorMongoRepository implements ILogErrorRepository {
  async log (stack: string): Promise<void> {
    const erroCollection = MongoHelper.getCollection('errors')
    await erroCollection.insertOne({
      stack,
      date: new Date()
    })
  }
}
