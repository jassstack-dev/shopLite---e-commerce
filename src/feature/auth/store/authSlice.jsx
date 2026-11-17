import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : 'auth',
    initialState:{
        user:null,
        isAuthenticated : false,
        isLoading : false
    },

    reducers:{
        loginUserAction : (state, action)=>{
             state.user = action.payload;
   state.isAuthenticated = true;
        state.isLoading = false
        },


        logoutUser : (state, action)=>{
            state.user = null,
            state.isAuthenticated  = false
        },

   

    }
})

export const {loginUserAction, logoutUser, setLoading} = authSlice.actions
export default authSlice.reducer 