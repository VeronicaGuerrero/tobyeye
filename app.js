const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
app.use(express.static('views'))
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/eyeTracker.html')
})
