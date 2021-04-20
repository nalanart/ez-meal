import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/reducer";

const AppContext = createContext();

const cartItems = [
  {
    id: 1,
    name: "Item 1",
    price: 1.99,
    src:
      "https://i.ibb.co/p39rVZs/homemade-birria-tacos-recipe-3273w-1024x683-edit.jpg",
    amount: 1,
  },
  {
    id: 2,
    name: "Item 2",
    price: 2.99,
    src:
      "https://i.ibb.co/p39rVZs/homemade-birria-tacos-recipe-3273w-1024x683-edit.jpg",
    amount: 1,
  },
  {
    id: 3,
    name: "Item 3",
    price: 3.99,
    src:
      "https://i.ibb.co/p39rVZs/homemade-birria-tacos-recipe-3273w-1024x683-edit.jpg",
    amount: 1,
  },
  {
    id: 4,
    name: "Item 4",
    price: 4.99,
    src:
      "https://i.ibb.co/p39rVZs/homemade-birria-tacos-recipe-3273w-1024x683-edit.jpg",
    amount: 1,
  },
];

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const changeAmount = (id, type) => {
    dispatch({
      type: "CHANGE_AMOUNT",
      payload: { id, type },
    });
  };

  useEffect(() => {
    dispatch({
      type: "GET_TOTALS",
    });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, removeItem, changeAmount }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
