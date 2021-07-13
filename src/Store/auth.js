import { createSlice } from "@reduxjs/toolkit";


const authState ={isAuthnticated:false};



const authSlice= createSlice({
  name:'auth',
  initialState:authState,
  reducers:{
    login(state){
      state.isAuthnticated=true;
    },
    logout(state){
      state.isAuthnticated=false;
    }
  }
});


export default authSlice;
export const authActions=authSlice.actions;