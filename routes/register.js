const registerRouter = require('express').Router()
const pool = require('../config/db')
const User = require('../models/User')
const bcrypt = require('bcrypt')

registerRouter.post('/', async (req, res) => {
  const { firstName, lastName, email, password1, password2 } = req.body

  // check if any fields are empty
  if(!firstName || !lastName || !email || !password1 || !password2) {
    return res.status(400).json({ error: 'Please fill in all fields' })
  }
  // check if password length is too short
  if(password1.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters' })
  }
  // check if passwords match
  if(password1 !== password2) {
    return res.status(400).json({ error: 'Passwords must match' })
  }

  try {
    // query db for email
    const user = await User.findOne({ email: email }).exec()
    console.log(user)
    // const results = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    // if email exists
    if(user) {
      res.status(400).json({ error: 'Email already registered' })
    } else {
      const hashedPassword = await bcrypt.hash(password1, 10)
      const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword
      })
      const savedUser = await newUser.save()
      res.status(201).send(savedUser)
    }
    // if(results.rowCount) {
    //   res.status(400).json({ error: 'Email already registered' })
    // } else { // email does not exist -- hash password and create new user
    //   const hashedPassword = await bcrypt.hash(password1, 10)
    //   const newUser = await pool.query('INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)', [firstName, lastName, email, hashedPassword])
    //   res.status(201).send('Account successfully created')
    // }
  } catch (error) {
    res.sendStatus(500)
  }
})

module.exports = registerRouter