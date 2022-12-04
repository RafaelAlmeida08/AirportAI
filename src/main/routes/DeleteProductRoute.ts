import { Router } from 'express'
import { adaptRoute } from '@/main/adapters'
import { makeDeleteProductController } from '../factories'

export default (router: Router): void => {
  router.delete('/products/:id', adaptRoute(makeDeleteProductController()))
}
