const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

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
const recipesRouter = require('./routes/recipes')
const usersRouter = require('./routes/users')

const app = express()

const initializePassport = require('./config/passport')
initializePassport(passport)

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
   console.log('connected to db')
})

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
app.use('/recipes', recipesRouter)
app.use('/users', usersRouter)

if(process.env.NODE_ENV === 'production') {
   // Serve any static files
   app.use(express.static(path.join(__dirname, 'frontend/build')))
   //Handle React routing, return all requests to React app
   app.get('*', function(req, res) {
     res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'))
   })
 }

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))