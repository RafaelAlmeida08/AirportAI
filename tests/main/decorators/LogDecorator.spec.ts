import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { LogControllerDecorator } from '@/main/decorators'

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

describe('LogControllerDecorator', () => {
  let controllerStub: ControllerStub
  let sut: LogControllerDecorator

  beforeEach(() => {
    controllerStub = new ControllerStub()
    sut = new LogControllerDecorator(controllerStub)
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
})
