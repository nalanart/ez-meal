import './Checkout.css'
import CheckoutItem from './CheckoutItem'
import { useState, useEffect, useRef, useReducer } from 'react'
import reducer from '../reducer'
const axios = require('axios')

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0
} 

export default function Checkout({ user }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const remove = id => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const increase = id => {
    dispatch({ type: 'INCREASE_QTY', payload: id })
  }

  const decrease = id => {
    dispatch({ type: 'DECREASE_QTY', payload: id })
  }

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS '})
  }, [state.cart])

  const [cart, setCart] = useState({
    items: []
  })
  const [subtotalArr, setSubtotalArr] = useState([0, 0])
  const [subtotal, setSubtotal] = useState()
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

  const handleShipping = ({ target }) => {
    const { value } = target
    setShipping(() => {
      if(value === 'free') return 0
      else return 5
    })
  }

  const handleQuantityChange = ({ target }, index) => {
    const { value } = target
    user.cart.items.splice(index, 1, {
      ...user.cart.items[index],
      quantity: value
    })

    // axios.put(`/users/${user._id}`, {
    //   ...user,
    //   cart: {
    //     ...user.cart,
    //     items: user.cart.items,
    //     subtotal: user.cart.items.reduce((accumulator, current) => accumulator.quantity * user.cart.pricePerMeal + current.quantity * user.cart.pricePerMeal)
    //   }
    // })
    
    setCart({
        ...user.cart,
        items: user.cart.items,
        subtotal: user.cart.items.reduce((accumulator, current) => accumulator.quantity * user.cart.pricePerMeal + current.quantity * user.cart.pricePerMeal)
      })
    }

  return cart.items.length > 0 ? (
    <div className="Checkout row">
      <section className="Checkout__table col-8">
        <h2>Cart ({cart.items.length} items)</h2>
        {cart.items.map((item, index) => (
        <>
          <CheckoutItem user={user} item={item} removeFromCart={removeFromCart} cart={cart} setCart={setCart} index={index} handleQuantityChange={handleQuantityChange} />
          <hr></hr>
        </>
        ))}
        <a href="/"><button className="btn btn-outline-primary btn-lg">Back to shopping</button></a>
      </section>
      <section className="Checkout__payment col-4">
        <div className="Checkout__shipping">
          <h4>Shipping </h4>
          <div>
            <input id="free-shipping" type="radio" name="shipping-method" value="free" onChange={handleShipping}></input>
            <label for="free-shipping"> &nbsp;FREE Shipping <span style={{ color: 'green' }}>-- get it Wednesday, Feb. 3</span></label>
          </div>
          <div>
            <input id="standard-shipping" type="radio" name="shipping-method" value="standard" onChange={handleShipping}></input>
            <label for="standard-shipping">&nbsp;$4.99 Standard Shipping <span style={{ color: 'green' }}>-- get it Monday, Feb. 8 - Wednesday, Feb. 10</span></label>
          </div>
        </div>
        <div className="Checkout__summary">
          <h4>Summary</h4>
          <div className="summary-item">
            <p>Subtotal</p>
            <p>${cart.subtotal}</p>
          </div>
          <div className="summary-item">
            <p>Shipping</p>
            {shipping !== undefined ? <p>${shipping}</p> : <i>Select a shipping method</i>}
          </div>
          <div className="summary-item">
            <p>Tax</p>
            <p>${tax}</p>
          </div>
          <div className="summary-item">
            <span><p><b>Total</b></p></span>
            <span><p><b>${(parseFloat(tax) + 2.99 + shipping).toFixed(2)}</b></p></span>
            {/* <span><p><b>${state.total}</b></p></span> */}
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