export interface HttpRequest {
  body?: any
}

export interface HttpResponse {
  statusCode: number
  message?: string | Error
  data?: any
}
