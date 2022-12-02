import { HttpResponse } from '@/presentation/protocols'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  message: error
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  message: new ServerError()
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  data: data
})

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  data: data
})

class ServerError extends Error {
  constructor () {
    super('Internal Server Error')
    this.name = 'ServerError'
  }
}
