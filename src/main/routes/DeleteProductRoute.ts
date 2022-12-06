import { Router } from 'express'
import { adaptRoute } from '@/main/adapters'
import { makeDeleteProductController } from '../factories'
import { auth } from '../middlewares/auth'

export default (router: Router): void => {
  router.delete('/products/:id', auth, adaptRoute(makeDeleteProductController()))
}
