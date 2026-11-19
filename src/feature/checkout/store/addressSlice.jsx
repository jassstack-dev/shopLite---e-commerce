import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
    name : 'address',  
    initialState:{
        address: JSON.parse(localStorage.getItem('address')) || [],
            selectedAddress: null,
    },
    
    reducers:{
        addAddress : (state, action)=>{
            state.address.push(action.payload)
        }
        ,
        addSelectedAddress: (state, action) => {
      state.selectedAddress = action.payload;
    },
    }
})

export const {addAddress, addSelectedAddress} = addressSlice.actions
export default addressSlice.reducer