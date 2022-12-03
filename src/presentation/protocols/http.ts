export interface HttpRequest {
  body?: any
  params?: any
}

export interface HttpResponse {
  statusCode: number
  message?: string | Error
  data?: any
}
