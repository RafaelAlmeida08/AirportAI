import { Product } from '@/domain/models'
import { GetProductError } from '@/domain/erros'

export interface IGetProductByDescription {
  execute: (param: GetProductByDescription.Param) => Promise<GetProductByDescription.Result>
}

export namespace GetProductByDescription {
  export type Param = string

  export type Result = Product | GetProductError | any

}
