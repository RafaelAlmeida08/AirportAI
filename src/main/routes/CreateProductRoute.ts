import { Router } from 'express'
import { adaptRoute } from '@/main/adapters'
import { makeCreateProductController } from '../factories'

export default (router: Router): void => {
  router.post('/products', adaptRoute(makeCreateProductController()))
}
