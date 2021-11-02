const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

app.use(cors())

app.use('/', express.static(path.resolve('./src/front'))) // serve main path as static dir
app.get('/', function (req, res) {
  // serve main path as static file
  res.sendFile(path.resolve('./src/front/index.html'))
})

app.listen(process.env.PORT || 3000, () => console.log('Server is running...'))
