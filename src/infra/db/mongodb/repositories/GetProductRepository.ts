import { IGetProductRepository } from '@/data/protocols/product'
import { GetProduct } from '@/domain/features'
import { MongoHelper } from '../helpers'
import { ObjectId } from 'mongodb'

export class GetProductMongoRepository implements IGetProductRepository {
  async find (id: GetProduct.Params): Promise<GetProduct.Result> {
    const productCollection = MongoHelper.getCollection('products')
    return await productCollection.findOne({ _id: new ObjectId(id) })
  }
}
