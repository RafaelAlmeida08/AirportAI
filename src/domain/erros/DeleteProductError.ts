export class DeleteProductError extends Error {
  constructor () {
    super('Delete Product failed')
    this.name = 'DeleteProductError'
  }
}
