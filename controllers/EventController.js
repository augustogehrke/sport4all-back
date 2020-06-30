const EventModel = require('../models/EventModel')

class EventController {
  async index () {
    try {
      const data = await EventModel.index()
      return data
    } catch (error) {
      throw error
    }
  }

  async show (id) {
    try {
      const doc = await EventModel.show(id)
      return doc
    } catch (error) {
      throw error
    }
  }

  async store (data) {
    try {
      const docId = await EventModel.store(data)
      return docId
    } catch (error) {
      throw error
    }
  }

  async update (data, id) {
    try {
      const success = await EventModel.update(data, id)
      return success
    } catch (error) {
      throw error
    }
  }

  async destroy (id) {
    try {
      const success = await EventModel.destroy(id)
      return success
    } catch (error) {
      throw error
    }
  }
}

module.exports = new EventController()
