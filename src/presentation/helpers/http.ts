import { HttpResponse } from '@/presentation/protocols'
import { ServerError, UnauthorizedError } from '@/presentation/erros'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  data: error.message
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  data: error
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: new ServerError(error.stack)
})

export const ok = (data?: any): HttpResponse => ({
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

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  data: new UnauthorizedError()
})
