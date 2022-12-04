import { ILogErrorRepository } from '@/data/protocols/error'
import { MongoHelper } from '@/infra/db/mongodb/helpers'
import { Collection } from 'mongodb'
import { LogErrorMongoRepository } from '@/infra/db/mongodb/repositories'

describe('', () => {
  let sut: ILogErrorRepository
  let errorCollection: Collection

  beforeAll(async () => {
    await MongoHelper.connect('mongodb://127.0.0.1:27017/AirportAI')
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })
  beforeEach(async () => {
    errorCollection = MongoHelper.getCollection('errors')
    await errorCollection.deleteMany({})
    sut = new LogErrorMongoRepository()
  })
  it('Should create an error log on success', async () => {
    await sut.log('any_error')
    const count = await errorCollection.countDocuments()
    expect(count).toBe(1)
  })
})
