const express = require('express')
const cors = require('cors')
const moesifMiddleware = require('./middleware/analytics')
const routes = require('./routes')
const { handle404, logErrors, handleErrors } = require('./handleErrors')

/** The Express app */
const app = express()
app.use(cors())
app.use(moesifMiddleware())
app.get('/favicon.ico', (req, res) => res.sendStatus(204))

// Redirect the root URL to the github repository
app.get('/', (req, res) => {
  res.redirect('https://github.com/lukePeavey/quotable')
})

app.use(routes)
app.use(handle404)
app.use(logErrors)
app.use(handleErrors)

module.exports = app
