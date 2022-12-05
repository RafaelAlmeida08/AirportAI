import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller): any => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body,
      params: request.params,
      query: request.query
    }
    const httpResponse: HttpResponse = await controller.handle(httpRequest)
    if (httpResponse.statusCode === 500) {
      response.status(httpResponse.statusCode).json({
        error: httpResponse.data.message
      })
    } else {
      response.status(httpResponse.statusCode).json(httpResponse.data)
    }
  }
}
