const express = require('express')
const app = express()
const pool = require('./pool')

// middleware
const bodyParser = require('body-parser')
const cors = require('cors')

// routers
const loginRouter = require('./routes/login')
const registerRouter = require('./routes/register')

const PORT = process.env.PORT || 4000

pool.query('SELECT *', (err, res) => {
  if(err) {
    console.log(err)
  } else {
    console.log(res)
  }
})

app.use(bodyParser.json())
   .use(cors())
   .use('/login', loginRouter)
   .use('/register', registerRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))