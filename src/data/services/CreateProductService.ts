import { CreateProduct, ICreateProduct } from '@/domain/features'
import { ICreateProductRepository } from '@/data/protocols'

export class CreateProductService implements ICreateProduct {
  private readonly createProductRepository: ICreateProductRepository
  constructor (createProductRepository: ICreateProductRepository) {
    this.createProductRepository = createProductRepository
  }

  async execute (params: CreateProduct.Params): Promise<CreateProduct.Result> {
    return await this.createProductRepository.create(params)
  }
}
