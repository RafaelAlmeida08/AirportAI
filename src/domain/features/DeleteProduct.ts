import { DeleteProductError } from '@/domain/erros'

export interface IDeleteProduct {
  execute: (param: DeleteProduct.Param) => Promise<DeleteProduct.Result>
}

export namespace DeleteProduct {
  export type Param = string | number

  export type Result = Boolean | DeleteProductError | any
}
