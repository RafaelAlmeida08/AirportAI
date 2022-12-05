/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '@/main/adapters'
import { makeCreateProductController } from '../factories'
import { auth } from '../middlewares/auth'

export default (router: Router): void => {
  router.post('/products', auth, adaptRoute(makeCreateProductController()))
}
