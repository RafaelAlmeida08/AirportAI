import { Router } from 'express'
import { adaptRoute } from '@/main/adapters'
import { makeGetProductController } from '../factories'

export default (router: Router): void => {
  router.get('/products/:id', adaptRoute(makeGetProductController()))
}
