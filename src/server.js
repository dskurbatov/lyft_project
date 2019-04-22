const express = require('express')
const bodyParser = require('body-parser')
const transfrom = require('./transform')

const app = new express()

app.use(bodyParser.json())

app.post('/test', (req, res) => {
  if(!req.body.string_to_cut || typeof req.body.string_to_cut !== 'string'){
    res.json({"error": 'No "string_to_cut" has been provided or provided not a string'})
  } else {
    const str = transfrom(req.body.string_to_cut)
    res.json({"return_string": str})
  }
})

module.exports = app