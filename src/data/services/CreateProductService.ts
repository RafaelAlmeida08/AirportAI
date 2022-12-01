import { CreateProduct, ICreateProduct } from '@/domain/features'

export class CreateProductService implements ICreateProduct {
  constructor (private readonly createProductRepository: any) {}
  async execute (params: CreateProduct.Params): Promise<CreateProduct.Result> {
    const product = await this.createProductRepository.create(params)
    return product
  }
}
