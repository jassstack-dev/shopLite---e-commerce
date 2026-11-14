import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../feature/carts/store/cartSlice'

export const store = configureStore({
    reducer :{
       cart: cartReducer 
    }
})

// create store

store.subscribe(()=>{
      const state = store.getState();

      console.log(state)

    localStorage.setItem(
        'cart',
        JSON.stringify(state.cart.cartItems)
    );
})