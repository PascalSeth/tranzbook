import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedin :false,
    email:null,
    userName:null,
    userID : null,
    photoURL:null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state,action) =>{
        console.log(action.payload)
        const {email,userName,userID,photoURL} =action.payload
        state.isLoggedin =true;
        state.email = email;
        state.userName = userName;
        state.userID = userID;
        state.photoURL = photoURL;

    },
    REMOVE_ACTIVE_USER:(state,action)=>{
        state.isLoggedin =false;
        state.email = null;
        state.userName = null;
        state.userID = null;
    }
  }
});

export const {SET_ACTIVE_USER,REMOVE_ACTIVE_USER} = authSlice.actions
export const selectisLoggedIn = (state) => state.auth.isLoggedin
export const selectEmail = (state) => state.auth.userName
export const selectUserName = (state) => state.auth.email
export const selectUserID = (state) => state.auth.userID

export default authSlice.reducer