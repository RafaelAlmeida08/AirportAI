import { CreateProductService } from '@/data/services'
import { CreateProduct } from '@/domain/features'

interface ICreateProductRepositoryStub {
  create: (params: CreateProduct.Params) => Promise<CreateProduct.Result>
}

class CreateProductRepositoryStub implements ICreateProductRepositoryStub {
  async create (params: CreateProduct.Params): Promise<CreateProduct.Result> {
    return {
      _id: 'valid_id',
      name: 'Bag',
      color: 'black',
      lostTime: new Date('2022-01-01'),
      createdAt: new Date('2022-01-01')
    }
  }
}

describe('CreateProductService', () => {
  let createProductRepositoryStub: CreateProductRepositoryStub
  let sut: CreateProductService
  const fakeProductData = {
    name: 'Bag',
    color: 'black',
    lostTime: new Date('2022-01-01')
  }
  beforeEach(() => {
    createProductRepositoryStub = new CreateProductRepositoryStub()
    sut = new CreateProductService(createProductRepositoryStub)
  })

  it('Should call CreateProductRepository with correct params', async () => {
    const createProductRepositorySpy = jest.spyOn(createProductRepositoryStub, 'create')
    await sut.execute(fakeProductData)
    expect(createProductRepositorySpy).toHaveBeenCalledWith({
      name: 'Bag',
      color: 'black',
      lostTime: new Date('2022-01-01')
    })
  })

  it('Should throw if CreateProductRepository throws', async () => {
    jest.spyOn(createProductRepositoryStub, 'create').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.execute(fakeProductData)
    await expect(promise).rejects.toThrow()
  })

  it('Should return a Product on success', async () => {
    const result = await sut.execute(fakeProductData)
    expect(result).toEqual({
      _id: 'valid_id',
      name: 'Bag',
      color: 'black',
      lostTime: new Date('2022-01-01'),
      createdAt: new Date('2022-01-01')
    })
  })
})
