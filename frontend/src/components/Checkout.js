import './Checkout.css'
import CheckoutItem from './CheckoutItem'
import { useState, useEffect } from 'react'
const axios = require('axios')

export default function Checkout({ user }) {
  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get(`/users/${user._id}`)
      .then(response => {
        console.log(response)
        setCart(response.data.cart)
      })
      .catch(err => {
        console.log(err)
      })
  }, [cart])

  return cart.length > 0 ? (
    <div className="Checkout">
      <section className="Checkout__table">
        <h2>Checkout</h2>
        <div class="Checkout__table-header row">
          <h5 class="col-3">Item</h5>
          <h5 class="col-3">Price</h5>
          <h5 class="col-3">Quantity</h5>
          <h5 class="col-3">Subtotal</h5>
        </div>
        <hr></hr>
        {cart.map(item => (
        <>
          <CheckoutItem item={item} />
          <hr></hr>
        </>
        ))}
      </section>
      <section className="Checkout__summary">
        <p>Bundle total: </p>
        <p>Shipping</p>
        <p>Subtotal</p>
        <p>GST</p>
        <p>Order total</p>
      </section>
    </div>
  ) : (
    <div className="Checkout">
      <i>You have no items in your cart.</i>
    </div>
  )
}