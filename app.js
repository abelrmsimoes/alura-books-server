const express = require('express')
const bookRouter = require('./routes/book')

const app = express()

app.use('/books', bookRouter)

const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
