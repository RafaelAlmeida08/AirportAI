import { IGetProductByDescriptionRepository } from '@/data/protocols/product'
import { GetProductByDescription } from '@/domain/features'
import { MongoHelper } from '../helpers'

export class GetProductByDescriptionMongoRepository implements IGetProductByDescriptionRepository {
  async find (param: GetProductByDescription.Param): Promise<GetProductByDescription.Result> {
    const productCollection = MongoHelper.getCollection('products')
    return await productCollection.find({ $text: { $search: param } }).toArray()
  }
}
