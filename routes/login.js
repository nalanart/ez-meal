const passport = require('passport')

const loginRouter = require('express').Router()

// loginRouter.post('/', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash: true
// }))

loginRouter.post('/', (req, res) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) return res.sendStatus(500)
    if(!user) return res.status(400).json({ error: info.message })
    return res.send('Successfully logged in')
  })(req, res)
})

module.exports = loginRouter