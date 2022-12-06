import { CreateProductController } from '@/application/controllers'
import { ICreateProductRepository } from '@/data/protocols'
import { CreateProduct, ICreateProduct } from '@/domain/features'
import { HttpRequest, HttpResponse } from '@/presentation/protocols'

class CreateProductRepositoryStub implements ICreateProductRepository {
  async create (params: CreateProduct.Params): Promise<CreateProduct.Result> {
    return {
      _id: 'any_id',
      name: 'any_name',
      color: 'any_color',
      description: 'any_description',
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
      _id: 'any_id',
      name: 'any_name',
      color: 'any_color',
      description: 'any_description',
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
        name: 'any_name',
        color: 'any_color',
        description: 'any_description',
        lostTime: new Date('2022-01-01')
      },
      headers: {
        accessToken: 'any_access_token'
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
      name: 'any_name',
      color: 'any_color',
      description: 'any_description',
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

  it('Should return 400 if no product name is provided', async () => {
    httpRequest = {
      body: {
        color: 'any_color',
        description: 'any_description',
        lostTime: new Date('2022-01-01')
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  it('Should return 400 if no product color is provided', async () => {
    httpRequest = {
      body: {
        name: 'any_name',
        description: 'any_description',
        lostTime: new Date('2022-01-01')
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  it('Should return 400 if no product description is provided', async () => {
    httpRequest = {
      body: {
        color: 'any_color',
        name: 'any_name',
        lostTime: new Date('2022-01-01')
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  it('Should return 400 if no product lostTime is provided', async () => {
    httpRequest = {
      body: {
        name: 'any_name',
        color: 'any_color',
        description: 'any_description'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  it('Should return 201 if CreateProductService succeed', async () => {
    httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(201)
    expect(httpResponse.data).toEqual({
      _id: 'any_id',
      name: 'any_name',
      color: 'any_color',
      description: 'any_description',
      lostTime: new Date('2022-01-01'),
      createdAt: new Date('2022-01-01')
    })
  })
})
