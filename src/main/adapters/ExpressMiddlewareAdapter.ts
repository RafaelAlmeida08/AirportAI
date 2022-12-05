import { Middleware } from '@/presentation/protocols'
import { NextFunction, Request, Response } from 'express'

export const adaptMiddleware = (middleware: Middleware) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const req = {
      accessToken: request.headers.authorization,
      ...(request.headers || {})
    }
    const httpResponse = await middleware.handle(req)
    if (httpResponse.statusCode === 200) {
      Object.assign(request, httpResponse.data)
      next()
    } else {
      response.status(httpResponse.statusCode).json({
        error: httpResponse.data.message
      })
    }
  }
}
