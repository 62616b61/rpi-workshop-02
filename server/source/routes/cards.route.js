import { Router } from 'express'
import validate from 'express-validation'

import * as Cards from '../controllers/cards.controller'

const router = new Router()

router.get('/', Cards.getAll)

router.get(
  '/:title',
  Cards.getCardByTitle
)

router.post(
  '/',
  validate(Cards.validation.create),
  Cards.createCard
)

router.post(
  '/:id/whitelist',
  validate(Cards.validation.isCorrect),
  Cards.whitelistCard
)

router.post(
  '/:id/unwhitelist',
  validate(Cards.validation.isCorrect),
  Cards.unwhitelistCard
)

router.post(
  '/:id/ban',
  validate(Cards.validation.isCorrect),
  Cards.banCard
)

router.post(
  '/:id/unban',
  validate(Cards.validation.isCorrect),
  Cards.unbanCard
)

router.post(
  '/check',
  validate(Cards.validation.create),
  Cards.checkCard
)

router.delete(
  '/:id',
  validate(Cards.validation.isCorrect),
  Cards.deleteCard
)

export default router
