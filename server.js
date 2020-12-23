const express = require('express')
const app = express()

// middleware
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const passportLocal = require('passport-local')
const cookieParser = require('cookie-parser')
const session = require('express-session')

// routers
const loginRouter = require('./routes/login')
const registerRouter = require('./routes/register')

const PORT = process.env.PORT || 4000

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(session({
   secret: 'Shoto',
   resave: true,
   saveUninitialized: true
}))
app.use(cookieParser('Shoto'))

// routes
app.use('/login', loginRouter)
app.use('/register', registerRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))