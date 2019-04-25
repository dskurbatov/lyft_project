//external
const express = require('express')
const bodyParser = require('body-parser')

//internal
const transfrom = require('./transform')

const app = new express()

//middleware
app.use(bodyParser.json())

//routes
app.post('/test', (req, res) => {
  const str = transfrom(req.body.string_to_cut)
  res.json({"return_string": str})
})

module.exports = app