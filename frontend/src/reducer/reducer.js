const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART": {
      const cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        ...state,
        cart,
      };
    }
    case "REMOVE_ITEM": {
      const cart = state.cart.filter((item) => item._id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        ...state,
        cart,
      };
    }
    case "CHANGE_AMOUNT": {
      const cart = state.cart
        .map((cartItem) => {
          if (cartItem._id === action.payload.id) {
            if (action.payload.type === "increase")
              return { ...cartItem, amount: cartItem.amount + 1 };
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        })
        .filter((item) => item.amount !== 0);
      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        ...state,
        cart: cart,
      };
    }
    case "LOADING":
      return { ...state, loading: action.payload };
    case "DISPLAY_CART":
      return { ...state, cart: action.payload, loading: false };
    case "ADD_ITEM": {
      const cart = [...state.cart, { ...action.payload, amount: 1 }];
      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        ...state,
        cart,
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
