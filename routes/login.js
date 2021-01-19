const passport = require('passport')
const loginRouter = require('express').Router()
const pool = require('../config/db')
const User = require('../models/User')

// loginRouter.post('/', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash: true
// }))

loginRouter.post('/', (req, res) => {
  passport.authenticate('local', async (err, user, info) => {
    if(err) return res.sendStatus(500)
    console.log(user)
    if(!user) return res.status(400).json({ error: info.message })
    else {
      try {
        const user = await User.findOne({ email: req.body.email }).exec()
        console.log(user)
        if(!user) return res.sendStatus(404)
        res.send(user)
      } catch(err) {
        return res.sendStatus(500)
      }
      // pool.query('SELECT * FROM users WHERE email = $1', [req.body.email], (err, user) => {
      //   if(err) {
      //     return res.sendStatus(500)
      //   }
      //   if(user.rowCount === 0) {
      //     return res.sendStatus(404)
      //   }
      //   res.send(user.rows)
      // })
    }
  })(req, res)

})

module.exports = loginRouter