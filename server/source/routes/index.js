import { Router } from 'express'
import CardsRoute from './cards.route'

const router = new Router()

router.use('/cards', CardsRoute)

export default router
