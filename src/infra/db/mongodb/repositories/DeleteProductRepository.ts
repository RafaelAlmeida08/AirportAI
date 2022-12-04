import { IDeleteProductRepository } from '@/data/protocols/product'
import { DeleteProduct } from '@/domain/features'
import { MongoHelper } from '../helpers'
import { ObjectId } from 'mongodb'

export class DeleteProductMongoRepository implements IDeleteProductRepository {
  async delete (param: DeleteProduct.Param): Promise<any> {
    console.log('chegou no repo')
    const productCollection = MongoHelper.getCollection('products')
    return await productCollection.findOneAndDelete({ _id: new ObjectId(param) })
  }
}
