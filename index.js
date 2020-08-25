const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Eu sou Full Cycle.')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port} \uD83D\uDCE1`)
})