import { MongoHelper } from '@/infra/db/mongodb/helpers'
import env from './config/env'
import app from './config/app'

MongoHelper.connect(env.mongoUrl)
  .then(() => {
    app.listen(env.port, () => console.log(`Server running on port ${env.port}`))
  })
  .catch(error => console.error(error))
