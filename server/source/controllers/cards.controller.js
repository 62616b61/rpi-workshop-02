import Joi from 'joi'
import HTTPStatus from 'http-status'

import Card from '../models/card.model.js'

export const validation = {
  create: {
    options: {
      allowUnknownBody: false
    },
    body: {
      title: Joi.string().required()
    }
  },
  isCorrect: {
    params: {
      id: Joi.string().alphanum().length(24).required()
    }
  }
}

export async function getAll (req, res, next) {
  try {
    return res.json(await Card.findAllCards())
  } catch (e) {
    e.status = HTTPStatus.BAD_REQUEST
    return next(e)
  }
}

export async function getCardByTitle (req, res, next) {
  try {
    return res
      .status(HTTPStatus.OK)
      .json(await Card.findByTitle(req.params.title))
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST
    return next(err)
  }
}

export async function createCard (req, res, next) {
  try {
    const card = await Card.create(req.body)
    return res.status(HTTPStatus.CREATED).json(card)
  } catch (e) {
    e.status = HTTPStatus.BAD_REQUEST
    return next(e)
  }
}

export async function whitelistCard (req, res, next) {
  try {
    const card = await Card.findById(req.params.id)

    await card.whitelist()

    return res.sendStatus(HTTPStatus.OK)
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST
    return next(err)
  }
}

export async function unwhitelistCard (req, res, next) {
  try {
    const card = await Card.findById(req.params.id)

    await card.unwhitelist()

    return res.sendStatus(HTTPStatus.OK)
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST
    return next(err)
  }
}


export async function banCard (req, res, next) {
  try {
    const card = await Card.findById(req.params.id)

    await card.ban()

    return res.sendStatus(HTTPStatus.OK)
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST
    return next(err)
  }
}

export async function unbanCard (req, res, next) {
  try {
    const card = await Card.findById(req.params.id)

    await card.unban()

    return res.sendStatus(HTTPStatus.OK)
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST
    return next(err)
  }
}

export async function checkCard (req, res, next) {
  try {
    const card = await Card.findByTitle(req.body.title)

    if (card) {
      if (card.banned) {
        return res.status(HTTPStatus.BAD_REQUEST)
      } else {
        if (card.whitelisted) {
          return res.status(HTTPStatus.OK)
        }
      }
    } else {
      await Card.create(req.body)
    }

    return res.status(HTTPStatus.BAD_REQUEST)

  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST
    return next(err)
  }
}

export async function deleteCard (req, res, next) {
  try {
    const card = await Card.findById(req.params.blueprintID)

    if (!card) {
      return res.sendStatus(HTTPStatus.NOT_FOUND)
    }

    await card.remove()
    return res.sendStatus(HTTPStatus.OK)
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST
    return next(err)
  }
}
