import { DeleteProductError } from '@/domain/erros'

export interface IDeleteProduct {
  execute: (id: DeleteProduct.Params) => Promise<DeleteProduct.Result>
}

export namespace DeleteProduct {
  export type Params = string | number

  export type Result = Boolean | DeleteProductError
}
