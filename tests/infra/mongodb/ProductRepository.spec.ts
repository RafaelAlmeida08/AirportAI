import { MongoHelper } from '@/infra/db/mongodb/helpers'
import { CreateProductMongoRepository } from '@/infra/db/mongodb'
describe('Product Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect('mongodb://127.0.0.1:27017/AirportAI')
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })
  beforeEach(async () => {
    const productCollection = MongoHelper.getCollection('products')
    await productCollection.deleteMany({})
  })
  it('Should return a Product on success', async () => {
    const sut = new CreateProductMongoRepository()
    const result = await sut.create({
      name: 'any_item_name',
      color: 'any_item_color',
      lostTime: new Date('2022-01-01')
    })
    expect(result.acknowledged).toBeTruthy()
  })
})
