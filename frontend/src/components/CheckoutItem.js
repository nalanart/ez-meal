import './CheckoutItem.css'
import { useState, useEffect, useRef } from 'react'
const axios = require('axios')

export default function CheckoutItem({ user, item, removeFromCart, cart, setCart, index, handleQuantityChange }) {

  return (
    <div className="CheckoutItem row">
      <img className="CheckoutItem__image col-3" src={item.imgSrc} alt={item.name} />
      <h5 className="CheckoutItem__name col-4">{item.name.toUpperCase()}</h5>
      <select className="CheckoutItem__qty form-select col-1" onChange={e => handleQuantityChange(e, index)}>
        <option value={0}>...</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <h5 className="CheckoutItem__price col-2">${user.cart.pricePerMeal * item.quantity}</h5>
      <p className="col">X <u onClick={() => removeFromCart(item._id)}>DELETE</u></p>
    </div>
  )
}