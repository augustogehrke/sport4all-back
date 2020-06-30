const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const bearerToken = require('express-bearer-token')
const events = require('./routes/events')
const app = express()
require('./configs/firebase')

app.use(cors())
app.use(bodyParser.json({limit: '5mb'}))
app.use(bearerToken())

// Rotas
app.use('/events', events)

module.exports = app
