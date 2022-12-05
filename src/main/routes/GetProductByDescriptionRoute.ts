import { Router } from 'express'
import { adaptRoute } from '@/main/adapters'
import { makeGetProductByDescriptionController } from '@/main/factories'
export default (router: Router): void => {
  router.get('/products', adaptRoute(makeGetProductByDescriptionController()))
}
