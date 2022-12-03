import { Router } from 'express'

export default (router: Router): void => {
  router.post('/products', (request, response) => {
    response.json({ ok: 'ok' })
  })
}
