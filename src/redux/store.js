import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

const loadCart = () => {
  const data = localStorage.getItem("cart");

  if (data) {
    return JSON.parse(data);
  }

  return undefined;
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },

  preloadedState: {
    cart: loadCart(),
  },
});

store.subscribe(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify(store.getState().cart)
  );
});

export default store;