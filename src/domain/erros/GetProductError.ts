export class GetProductError extends Error {
  constructor () {
    super('Get Product failed')
    this.name = 'GetProductError'
  }
}
