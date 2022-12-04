import { HttpResponse } from '@/presentation/protocols'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  message: error
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  data: error
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: new ServerError(error.stack)
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  data: data
})

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  data: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  data: null
})

class ServerError extends Error {
  constructor (stack: string | undefined) {
    super('Internal Server Error')
    this.name = 'ServerError'
    this.stack = stack
  }
}

export class AccessDeniedError extends Error {
  constructor () {
    super('Access Denied')
    this.name = 'AccessDeniedError'
  }
}
