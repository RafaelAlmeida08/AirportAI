import request from 'supertest'
import app from '@/main/config/app'

describe('CreateProductRoute', () => {
  it('Should return a product on success', async () => {
    await request(app)
      .post('/products')
      .send({
        name: 'any_product',
        color: 'any_product_color',
        lostTime: new Date()
      })
      .expect(200)
  })
})
