import { Router } from 'express'

const router = Router()


router.get('/', function(req, res) {
  res.render('index', { title: 'Mongoose Air: a Mongoose flight app' })
})

export { 
  router
}
