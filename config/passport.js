const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy
const pool = require('./db')

function initializePassport(passport) {
  passport.use(new LocalStrategy({
    usernameField: 'email'
  }, (email, password, done) => {
    if(password.length < 8) return done(null, false, { message: 'Password must be at least 8 characters' })
    // query db for email
    pool.query('SELECT * FROM users WHERE email = $1', [email])
      .then(res => {
        // no email found
        if(!res.rowCount) {
          return done(null, false, { message: 'Incorrect email/password' })
        }
        // email exists - compare passwords
        bcrypt.compare(password, res.rows[0].password, (err, isMatch) => {
          if(err) {
            return done(err)
          }
          // passwords don't match
          if(!isMatch) {
            return done(null, false, { message: 'Incorrect email/password' })
          }
          // passwords match
          return done(null, res.rows[0])
        })
      })
      .catch(err => {
        res.sendStatus(500)
      })
  }))

  passport.serializeUser((user, done) => done(null, user.id))

  passport.deserializeUser((id, done) => {
    pool.query('SELECT * FROM users where id = $1', [id], (err, results) => {
      done(err, results.rows[0])
    })
  })
}

module.exports = initializePassport