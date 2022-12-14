var express = require('express')
var app = express()

const port = '3000'

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })