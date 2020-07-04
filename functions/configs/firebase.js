const admin = require('firebase-admin')

class FirebaseProvider {
  constructor () {
    try {
      this.serviceAccount = {
        type: '',
        project_id: '',
        private_key_id: '',
        private_key: '',
        client_email: '',
        client_id: '',
        auth_uri: '',
        token_uri: '',
        auth_provider_x509_cert_url: '',
        client_x509_cert_url: ''
      }
      this.firebase = admin
      this.init()
    } catch (err) {
      console.log(
        `An error happened while initializing firebase: (${err})`
      )
    }
  }

  init () {
    this.firebase.initializeApp({
      credential: this.firebase.credential.cert(this.serviceAccount),
      databaseURL: ''
    })

    console.log('Firebase connected with the project')
  }
}

module.exports = new FirebaseProvider().firebase
