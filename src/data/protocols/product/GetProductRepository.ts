import { GetProduct } from '@/domain/features'

export interface IGetProductRepository {
  find: (params: GetProduct.Params) => Promise<GetProduct.Result>
}
