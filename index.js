require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('as_shejan')
})

app.get('/login', (req, res) => {
    res.send('<h1> there you go </h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> this is shejan </h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

