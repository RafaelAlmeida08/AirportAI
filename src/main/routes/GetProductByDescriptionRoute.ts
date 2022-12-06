import { Router } from 'express'
import { adaptRoute } from '@/main/adapters'
import { makeGetProductByDescriptionController } from '@/main/factories'
import { auth } from '../middlewares/auth'

export default (router: Router): void => {
  router.get('/products', auth, adaptRoute(makeGetProductByDescriptionController()))
}
