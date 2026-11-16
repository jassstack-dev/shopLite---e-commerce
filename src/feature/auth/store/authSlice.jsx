import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : 'auth',
    initialState:{
        user:[],
          accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: null,
        isAuthenticated : false,
        isLoading : false
    },

    reducers:{
        loginUserAction : (state, action)=>{
             state.user = action.payload.user;
  state.accessToken = action.payload.accessToken;
  state.refreshToken = action.payload.refreshToken;
   state.isAuthenticated = true;

            
        },


        logoutUser : (state, action)=>{
            state.user = null,
            state.isAuthenticated  = false
        },

        setLoading : (state, action)=>{
            state.isLoading = action.payload
        }

    }
})

export const {loginUserAction, logoutUser, setLoading} = authSlice.actions
export default authSlice.reducer 