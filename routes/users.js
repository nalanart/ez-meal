const usersRouter = require('express').Router()
const pool = require('../config/db')
const User = require('../models/User')

usersRouter.param('userId', async (req, res, next, userId) => {
  try {
    const user = await User.findById(userId).exec()
    if(!user.id) return res.sendStatus(404)
    req.user = user
    next()
  } catch(error) {
    console.log(error)
    return res.sendStatus(500)
  }
  // pool.query('SELECT * FROM users WHERE id = $1', [userId], (err, user) => {
  //   if(err) {
  //     return res.sendStatus(500)
  //   }
  //   if(user.rowCount === 0) {
  //     res.sendStatus(404)
  //   } else {
  //     req.user = user.rows
  //     next()
  //   }
  // })
})

usersRouter.get('/:userId', (req, res) => {
  res.send(req.user)
})

usersRouter.put('/:userId', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      cart: req.body.cart
    }, { useFindAndModify: false })
    console.log(user)
    res.status(200).send(user)
  } catch(err) {
    res.sendStatus(500)
  }
    // pool.query("UPDATE users SET cart = COALESCE(cart, '[]' :: jsonb) || $1 :: jsonb WHERE id = $2", [req.body.items, req.params.userId], (err, user) => {
    //   if(err) {
    //     console.log(err)
    //     return res.sendStatus(500)
    //   }
    //   res.send(user.rows)
    // })
})

module.exports = usersRouter