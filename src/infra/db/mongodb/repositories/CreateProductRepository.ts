import { ICreateProductRepository } from '@/data/protocols'
import { CreateProduct } from '@/domain/features'
import { MongoHelper } from '../helpers'

export class CreateProductMongoRepository implements ICreateProductRepository {
  async create (params: CreateProduct.Params): Promise<any> {
    const productCollection = MongoHelper.getCollection('products')
    return await productCollection.insertOne({
      name: params.name,
      color: params.color,
      description: params.description,
      lostTime: params.lostTime,
      createdAt: new Date()
    })
  }
}
