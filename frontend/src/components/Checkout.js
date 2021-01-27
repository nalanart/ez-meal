import './Checkout.css'
import CheckoutItem from './CheckoutItem'
import { useState, useEffect, useRef } from 'react'
const axios = require('axios')

export default function Checkout({ user }) {
  const [cart, setCart] = useState([])
  const [shipping, setShipping] = useState()
  const [tax, setTax] = useState((2.99 * 0.15).toFixed(2))
  const initial = useRef(false) // used with conditional to prevent initial useEffect's from executing

  useEffect(() => {
    axios.get(`/users/${user._id}`)
      .then(response => {
        console.log(response)
        setCart(response.data.cart)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  // sync with db
  useEffect(() => {
    if(initial.current) {
      axios.put(`users/${user._id}`, {
        ...user,
        cart: cart
      })
    }
  }, [cart])

  const removeFromCart = id => {
    console.log(id)
    setCart(prev => prev.filter(item => item._id !== id))
    initial.current = true // necessary because 'initial' is initialized to false
  }

  const handleChange = ({ target }) => {
    const { value } = target
    setShipping(() => {
      if(value === 'free') return '0.00'
      else return '5.00'
    })
  }

  return cart.length > 0 ? (
    <div className="Checkout row">
      <section className="Checkout__table col-8">
        <h2>Cart ({cart.length} items)</h2>
        {cart.map(item => (
        <>
          <CheckoutItem item={item} removeFromCart={removeFromCart} />
          <hr></hr>
        </>
        ))}
        <a href="/"><button className="btn btn-outline-primary btn-lg">Back to shopping</button></a>
      </section>
      <section className="Checkout__payment col-4">
        <div className="Checkout__shipping">
          <h4>Shipping </h4>
          <div>
            <input id="free-shipping" type="radio" name="shipping-method" value="free" onChange={handleChange}></input>
            <label for="free-shipping"> &nbsp;FREE Shipping <span style={{ color: 'green' }}>-- get it Wednesday, Feb. 3</span></label>
          </div>
          <div>
            <input id="standard-shipping" type="radio" name="shipping-method" value="standard" onChange={handleChange}></input>
            <label for="standard-shipping">&nbsp;$4.99 Standard Shipping <span style={{ color: 'green' }}>-- get it Monday, Feb. 8 - Wednesday, Feb. 10</span></label>
          </div>
        </div>
        <div className="Checkout__summary">
          <h4>Summary</h4>
          <div className="summary-item">
            <p>Subtotal</p>
            <p>$2.99</p>
          </div>
          <div className="summary-item">
            <p>Shipping</p>
            {shipping ? <p>${shipping}</p> : <i>Select a shipping method</i>}
          </div>
          <div className="summary-item">
            <p>Tax</p>
            <p>${tax}</p>
          </div>
          <div className="summary-item">
            <span><p><b>Total</b></p></span>
            <span><p><b>${(parseFloat(tax) + 2.99 + parseFloat(shipping)).toFixed(2)}</b></p></span>
          </div>                 
        </div>
        <button className="btn btn-primary btn-lg">Proceed to checkout</button>
      </section>
    </div>
  ) : (
    <div className="Checkout">
      <i>You have no items in your cart.</i>
    </div>
  )
}