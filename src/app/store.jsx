import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/carts/store/cartSlice";
import authReducer from "../feature/auth/store/authSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

// create store

store.subscribe(() => {
  const state = store.getState();

  console.log(state);

  const accessToken = state.auth.accessToken;

  localStorage.setItem("cart", JSON.stringify(state.cart.cartItems));

  if(accessToken){
    localStorage.setItem("accessToken", accessToken);
  }
});
