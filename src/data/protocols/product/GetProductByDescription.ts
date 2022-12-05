import { GetProductByDescription } from '@/domain/features'

export interface IGetProductByDescriptionRepository {
  find: (param: GetProductByDescription.Param) => Promise<GetProductByDescription.Result>
}
