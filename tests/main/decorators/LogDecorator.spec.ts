import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { LogControllerDecorator } from '@/main/decorators'
import { serverError } from '@/presentation/helpers'
import { ILogErrorRepository } from '@/data/protocols/error'

class ControllerStub implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponseMock: HttpResponse = {
      statusCode: 200,
      data: {
        name: 'any_item_name',
        color: 'any_item_color',
        lostTime: new Date('2022-01-01')
      }
    }
    return new Promise(resolve => resolve(httpResponseMock))
  }
}

class LogErrorRepositoryStub implements ILogErrorRepository {
  async log (stack: string): Promise<void> {
    return new Promise(resolve => resolve())
  }
}

describe('LogControllerDecorator', () => {
  let controllerStub: ControllerStub
  let sut: LogControllerDecorator
  let logErrorRepositoryStub: LogErrorRepositoryStub

  beforeEach(() => {
    controllerStub = new ControllerStub()
    logErrorRepositoryStub = new LogErrorRepositoryStub()
    sut = new LogControllerDecorator(controllerStub, logErrorRepositoryStub)
  })

  it('Should call internal controller handle', async () => {
    const handleSpy = jest.spyOn(controllerStub, 'handle')
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_item_name',
        color: 'any_item_color',
        lostTime: new Date('2022-01-01')
      }
    }
    await sut.handle(httpRequest)
    expect(handleSpy).toHaveBeenCalledWith({
      body: {
        name: 'any_item_name',
        color: 'any_item_color',
        lostTime: new Date('2022-01-01')
      }
    })
  })

  it('Should return the same internal result controller', async () => {
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_item_name',
        color: 'any_item_color',
        lostTime: new Date('2022-01-01')
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual({
      statusCode: 200,
      data: {
        name: 'any_item_name',
        color: 'any_item_color',
        lostTime: new Date('2022-01-01')
      }
    })
  })

  it('Should call LogErrorRepository with correct error if controller return a server error', async () => {
    const fakeError = new Error()
    fakeError.stack = 'any_stack'
    const error = serverError(fakeError)
    const logSpy = jest.spyOn(logErrorRepositoryStub, 'log')
    jest.spyOn(controllerStub, 'handle').mockReturnValueOnce(new Promise(resolve => resolve(error)))
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_item_name',
        color: 'any_item_color',
        lostTime: new Date('2022-01-01')
      }
    }
    await sut.handle(httpRequest)
    expect(logSpy).toHaveBeenCalledWith('any_stack')
  })
})
