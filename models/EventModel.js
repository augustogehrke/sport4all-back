const firebase = require('../configs/firebase')
const db = firebase.firestore()

class EventModel {
  constructor () {
    this.collection = db.collection('events')
  }

  async index () {
    try {
      let allEvents = this.collection.get().then(snapshot => {
        const data = []
        snapshot.forEach(doc => {
          data.push({ ...doc.data(), id: doc.id })
        })
        return data
      })
      return allEvents
    } catch (error) {
      throw error
    }
  }

  async show (id) {
    try {
      const doc = this.collection.doc(id)
      const data = doc.get().then(doc => {
        if (!doc.exists) {
          throw new Error('Document Not Found')
        } else {
          return { ...doc.data(), id: doc.id }
        }
      })

      return data
    } catch (error) {
      throw error
    }
  }

  async store (data) {
    try {
      const id = this.collection.add(data).then(doc => {
        return doc.id
      })

      return id
    } catch (error) {
      throw error
    }
  }

  async update (data, id) {
    try {
      const doc = this.collection.doc(id)
      doc.update(data)

      return true
    } catch (error) {
      throw error
    }
  }

  async destroy (id) {
    try {
      const doc = this.collection.doc(id)
      doc.delete()
      return true
    } catch (error) {
      throw error
    }
  }

  async addParticipant (data, id) {
    try {
      const participantId = this.collection.doc(id).collection('participants').add(data).then(doc => {
        return doc.id
      })

      return participantId
    } catch (error) {
      throw error
    }
  }

  async getParticipants (id) {
    const doc = this.collection.doc(id)

    let participants = doc.collection('participants').get().then((snapshot) => {
      const data = []
      snapshot.forEach(doc => {
        data.push({ ...doc.data(), id: doc.id })
      })
      return data
    })

    return participants
  }
}

module.exports = new EventModel()
