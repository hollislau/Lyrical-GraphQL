require('dotenv').config()

const app = require('./server/server')

const PORT = '4000'

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`)
})
