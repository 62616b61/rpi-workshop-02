import { Router } from 'express'
import RFIDRoute from './rfid.route'

const router = new Router()

router.use('/rfid', RFIDRoute)

export default router
