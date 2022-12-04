import { DeleteProduct } from '@/domain/features'

export interface IDeleteProductRepository {
  delete: (param: DeleteProduct.Param) => Promise<DeleteProduct.Result>
}
