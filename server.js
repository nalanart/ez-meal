const express = require('express')

// middleware
const bodyParser = require('body-parser')
const cors = require('cors')

const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')

// routers
const loginRouter = require('./routes/login')
const registerRouter = require('./routes/register')

const app = express()

const initializePassport = require('./config/passport')
initializePassport(passport)

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(session({
   secret: 'Shoto',
   resave: true,
   saveUninitialized: true
}))
app.use(flash())
app.use(cookieParser('Shoto'))
app.use(passport.initialize())
app.use(passport.session())

// routes
app.use('/login', loginRouter)
app.use('/register', registerRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))