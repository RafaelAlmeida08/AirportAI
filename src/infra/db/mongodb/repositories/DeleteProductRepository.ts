import { IDeleteProductRepository } from '@/data/protocols/product'
import { DeleteProduct } from '@/domain/features'
import { MongoHelper } from '../helpers'
import { ObjectId } from 'mongodb'

export class DeleteProductMongoRepository implements IDeleteProductRepository {
  async delete (param: DeleteProduct.Param): Promise<DeleteProduct.Result> {
    const productCollection = MongoHelper.getCollection('products')
    return await productCollection.findOneAndDelete({ params: new ObjectId(param) })
  }
}
