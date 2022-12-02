import { CreateProductController } from '@/controllers'
import { ICreateProductRepository } from '@/data/protocols'
import { CreateProduct, ICreateProduct } from '@/domain/features'
import { HttpRequest, HttpResponse } from '@/presentation/protocols'

class CreateProductRepositoryStub implements ICreateProductRepository {
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

class CreateProductServiceStub implements ICreateProduct {
  private readonly createProductService: ICreateProductRepository
  constructor (createProductService: ICreateProductRepository) {
    this.createProductService = createProductService
  }

  async execute (params: CreateProduct.Params): Promise<CreateProduct.Result> {
    return {
      _id: 'valid_id',
      name: 'Bag',
      color: 'black',
      lostTime: new Date('2022-01-01'),
      createdAt: new Date('2022-01-01')
    }
  }
}

describe('CreateProductController', () => {
  let httpResponse: HttpResponse
  let httpRequest: HttpRequest
  let createProductRepositoryStub: CreateProductRepositoryStub
  let createProductServiceStub: CreateProductServiceStub
  let sut: CreateProductController
  beforeEach(() => {
    httpRequest = {
      body: {
        name: 'Bag',
        color: 'black',
        lostTime: new Date('2022-01-01')
      }
    }
    createProductRepositoryStub = new CreateProductRepositoryStub()
    createProductServiceStub = new CreateProductServiceStub(createProductRepositoryStub)
    sut = new CreateProductController(createProductServiceStub)
  })
  it('Should call CreateProductService with correct values', async () => {
    const spy = jest.spyOn(createProductServiceStub, 'execute')
    await sut.handle(httpRequest)
    expect(spy).toBeCalledWith({
      name: 'Bag',
      color: 'black',
      lostTime: new Date('2022-01-01')
    })
  })

  it('Should return 500 if CreateProductService throws', async () => {
    jest.spyOn(createProductServiceStub, 'execute').mockImplementationOnce(async () => {
      return new Promise((resolve, reject) => {
        reject(new Error())
      })
    })
    httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
