import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartItems : JSON.parse(localStorage.getItem('cart')) || [],
     
    },
    reducers:  {

        addToCart : (state, action)=>{
            const product = {
                ...action.payload,
                quantity: 1
            }
            state.cartItems.push(product)
        },
        increaseQuantity :(state, action)=>{
            const product = state.cartItems.find((items)=>{
                return items.id === action.payload
            })

            if(product){
                product.quantity +=1
            }
        },

        decreaseQuantity : (state,action)=>{
            const product = state.cartItems.find((items)=>{
                return items.id === action.payload
            })

            if(product && product.quantity > 1){
                product.quantity -=1
            }
        },

        removeCartItem : (state,action)=>{
            state.cartItems = state.cartItems.filter((items)=>{
                return items.id !== action.payload
            })

            
            
        }
    }


})

export const {addToCart, increaseQuantity, decreaseQuantity, removeCartItem} = cartSlice.actions
export default cartSlice.reducer