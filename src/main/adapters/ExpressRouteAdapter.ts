import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller): any => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body,
      params: request.params
    }
    const httpResponse: HttpResponse = await controller.handle(httpRequest)
    response.status(httpResponse.statusCode).json(httpResponse.data)
  }
}
