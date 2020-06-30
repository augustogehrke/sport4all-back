const firebase = require('../configs/firebase');

class AuthMiddleware {
  constructor() {
  }

  async verifyToken(req, res, next) {
    try {
      const token = req.token
      if (!token) {
        res.status(400).json({
          error: {
            message: `Specify a Bearer token in order to be authenticated`
          }
        })
      }

      await firebase.auth().verifyIdToken(token)
      next()
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}

module.exports = new AuthMiddleware()
