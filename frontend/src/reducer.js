const reducer = (state, action) => {
  if(action.type === 'REMOVE_ITEM') {
    return { ...state, cart: state.cart.filter(cartItem => cartItem._id !== action.payload)}
  } else if(action.type === 'INCREASE_QTY') {
    let tempCart = state.cart.map(cartItem => {
      if(cartItem._id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 }
      }
      return cartItem
    })
    return { ...state, cart: tempCart }
  } else if(action.type === 'DECREASE_QTY') {
    let tempCart = state.cart.map(cartItem => {
      if(cartItem._id === action.payload) {
        return { ...cartItem, amount: cartItem.amount - 1 }
      }
      return cartItem
    })
    return { ...state, cart: tempCart }
  } else if(action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
      const { price, amount } = cartItem
      const itemTotal = price * amount
      cartTotal.total += itemTotal
      cartTotal.amount += amount
      return cartTotal
    }, {
      total: 0,
      amount: 0
    })
    total = parseFloat(total.toFixed(2))
    return { ...state, total, amount }
  }
  return state
}

export default reducer