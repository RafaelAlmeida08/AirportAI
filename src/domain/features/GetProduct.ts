import { Product } from '@/domain/models'
import { GetProductError } from '@/domain//erros'

export interface IGetProduct {
  execute: (id: GetProduct.Params) => Promise<GetProduct.Result>
}

export namespace GetProduct {
  export type Params = string | number

  export type Result = Product | GetProductError | any
}
