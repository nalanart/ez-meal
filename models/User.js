const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: {type: String, required: true},
  cart: {
    bundleSelected: Number,
    pricePerMeal: Number,
    quantity: Number,
    subtotal: Number,
    items: Array
  }
}) 

const User = mongoose.model('User', userSchema)

module.exports = User