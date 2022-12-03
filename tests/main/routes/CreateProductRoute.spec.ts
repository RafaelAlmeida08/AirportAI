import request from 'supertest'
import app from '@/main/config/app'
import { MongoHelper } from '@/infra/db/mongodb/helpers'

describe('CreateProductRoute', () => {
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

  it('Should return a product on success', async () => {
    await request(app)
      .post('/products')
      .send({
        name: 'any_product',
        color: 'any_product_color',
        lostTime: new Date()
      })
      .expect(201)
  })
})
