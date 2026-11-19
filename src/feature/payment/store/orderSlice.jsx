import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState:{
        orders: JSON.parse(localStorage.getItem('order')) ||[]
    },
    reducers:{
        addOrder : (state, action)=>{
            state.orders.push(action.payload)
        }
    }
})

export const {addOrder} = orderSlice.actions
export default orderSlice.reducer