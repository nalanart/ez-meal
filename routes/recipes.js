const recipesRouter = require('express').Router()
const pool = require('../config/db')
const Meal = require('../models/Meal')

recipesRouter.get('/', async (req, res) => {
  try {
    const meals = await Meal.find({})
    console.log(meals)
    if(meals.length === 0) return res.sendStatus(404)
    res.send(meals)
  } catch(err) {
    res.sendStatus(500)
  }
  // pool.query('SELECT * FROM meals', (err, recipes) => {
  //   if(err) {
  //     return res.sendStatus(500)
  //   }
  //   if(recipes.rowCount === 0) {
  //     return res.sendStatus(404)
  //   }
  //   res.send(recipes.rows)
  //   console.log(recipes.rows)
  // })
})

module.exports = recipesRouter