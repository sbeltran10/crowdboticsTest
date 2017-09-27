var express = require('express')
var cors = require('cors')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

const DB_URI = 'mongodb://heroku_fplhf59k:n8qio6584racdjg3hokqqrf3rl@ds155424.mlab.com:55424/heroku_fplhf59k'
mongoose.connect(DB_URI)

var randomNames = require('./routes/randomNames')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cookieParser())
app.use(cors())

app.use('/randomnames', randomNames)

app.get('/', (req, res) => {
  res.status(200).send('RandomNamesResource')
})

app.listen(process.env.PORT || 8080)
