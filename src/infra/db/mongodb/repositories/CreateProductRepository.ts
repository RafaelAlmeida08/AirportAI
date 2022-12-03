import { ICreateProductRepository } from '@/data/protocols'
import { CreateProduct } from '@/domain/features'
import { MongoHelper } from '../helpers'

export class CreateProductMongoRepository implements ICreateProductRepository {
  async create (params: CreateProduct.Params): Promise<any> {
    const productCollection = MongoHelper.getCollection('products')
    const result = await productCollection.insertOne(params)
    return result
  }
}
