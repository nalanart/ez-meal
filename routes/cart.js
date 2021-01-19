const cartRouter = require('express').Router({ mergeParams: true })
const pool = require('../config/db')

cartRouter.get('/', (req, res) => {
  pool.query('SELECT * FROM carts WHERE user_id = $1', [req.user.id], (err, results) => {
    if(err) {
      return res.sendStatus(500)
    }
    res.send(results.rows)
  })
})

module.exports = cartRouter