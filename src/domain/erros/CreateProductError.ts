export class CreateProductError extends Error {
  constructor () {
    super('Create Product failed')
    this.name = 'CreateProductError'
  }
}
