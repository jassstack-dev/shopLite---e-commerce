import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/carts/store/cartSlice";
import authReducer from "../feature/auth/store/authSlice";
import orderSlice from '../feature/payment/store/orderSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    orders :orderSlice
  },
});

// create store

store.subscribe(() => {
  const state = store.getState();

  console.log(state);


  localStorage.setItem("cart", JSON.stringify(state.cart.cartItems));


});
