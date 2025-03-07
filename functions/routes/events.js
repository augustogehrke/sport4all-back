const express = require('express')
const router = express.Router()
const EventController = require('../controllers/EventController')
const AuthMiddleware = require('../middlewares/AuthMiddleware')

router.get('/', AuthMiddleware.verifyToken , async (req, res) => {
  try {
    const data = await EventController.index()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: { message: error.message, name: error.name } })
  }
})

router.get('/:id', AuthMiddleware.verifyToken , async (req, res) => {
  try {
    const data = await EventController.show(req.params.id)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: { message: error.message, name: error.name } })
  }
})

router.post('/', AuthMiddleware.verifyToken, async (req, res) => {
  try {
    const { body } = req
    const data = await EventController.store(body)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: { message: error.message, name: error.name } })
  }
})

router.put('/:id', AuthMiddleware.verifyToken, async (req, res) => {
  try {
    const { body } = req
    const data = await EventController.update(body, req.params.id)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: { message: error.message, name: error.name } })
  }
})

router.delete('/:id', AuthMiddleware.verifyToken, async (req, res) => {
  try {
    const data = await EventController.destroy(req.params.id)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: { message: error.message, name: error.name } })
  }
})

router.post('/:id/participants', AuthMiddleware.verifyToken, async (req, res) => {
  try {
    const { body } = req
    const data = await EventController.addParticipant(body, req.params.id)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: { message: error.message, name: error.name } })
  }
})

router.get('/:id/participants', AuthMiddleware.verifyToken, async (req, res) => {
  try {
    const data = await EventController.getParticipants(req.params.id)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: { message: error.message, name: error.name } })
  }
})

router.delete('/:id/participants/:idParticipant', AuthMiddleware.verifyToken, async (req, res) => {
  try {
    const data = await EventController.destroyParticipant(req.params.id, req.params.idParticipant)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: { message: error.message, name: error.name } })
  }
})

module.exports = router
