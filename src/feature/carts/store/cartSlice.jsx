import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartItems : JSON.parse(localStorage.getItem('cart')) || []
    },
    reducers:  {

        addToCart : (state, action)=>{
            state.cartItems.push(action.payload)
        }

    }


})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer