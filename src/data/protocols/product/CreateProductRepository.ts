import { CreateProduct } from '@/domain/features'

export interface ICreateProductRepository {
  create: (params: CreateProduct.Params) => Promise<CreateProduct.Result>
}
