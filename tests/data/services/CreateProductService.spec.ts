import { CreateProductService } from '@/data/services'
// import { Product } from '@/domain/models'
import { CreateProduct } from '@/domain/features'

interface ICreateProductRepositoryStub {
  create: (params: CreateProduct.Params) => Promise<any>
}

class CreateProductRepositoryStub implements ICreateProductRepositoryStub {
  async create (params: CreateProduct.Params): Promise<any> {}
}

describe('CreateProductService', () => {
  let createProductRepositoryStub: any
  let sut: CreateProductService
  beforeEach(() => {
    createProductRepositoryStub = new CreateProductRepositoryStub()
    sut = new CreateProductService(createProductRepositoryStub)
  })

  it('Should call CreateProductRepository with correct params', async () => {
    const productData = {
      name: 'Bag',
      color: 'black',
      lostTime: new Date('2022-01-01')
    }
    const createProductRepositorySpy = jest.spyOn(createProductRepositoryStub, 'create')
    await sut.execute(productData)
    expect(createProductRepositorySpy).toHaveBeenCalledWith({
      name: 'Bag',
      color: 'black',
      lostTime: new Date('2022-01-01')
    })
  })
})
