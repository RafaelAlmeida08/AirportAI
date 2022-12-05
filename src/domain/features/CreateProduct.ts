import { Product } from '@/domain/models'
import { CreateProductError } from '@/domain//erros'

export interface ICreateProduct {
  execute: (params: CreateProduct.Params) => Promise<CreateProduct.Result>
}

export namespace CreateProduct {
  export type Params = {
    name: string
    color: string
    description: string
    lostTime: Date
  }
  export type Result = Product | CreateProductError
}
