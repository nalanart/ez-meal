const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART": {
      return {
        ...state,
        cart: [],
        total: 0,
        amount: 0,
      };
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case "CHANGE_AMOUNT": {
      const tempCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.type === "increase")
              return { ...cartItem, amount: cartItem.amount + 1 };
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        })
        .filter((item) => item.amount !== 0);

      return {
        ...state,
        cart: tempCart,
      };
    }
    case "GET_TOTALS": {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));

      return { ...state, total, amount };
    }
    default:
      throw new Error("No matching action type");
  }
};

export default reducer;
