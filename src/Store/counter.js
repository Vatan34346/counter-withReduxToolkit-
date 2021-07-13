import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice=createSlice({  //redux toolkit
    name:'counter',
    initialState:initialCounterState,
    reducers:{
      increment(state){
        state.counter++
      },
      decrement(state){
        state.counter--;
      },
      increase(state,action){
           state.counter=state.counter+action.payload//default in redux object from counter
      },
      toggleCounter(state){
        state.showCounter=!state.showCounter;
      }
    }
  });

  export const counterACtions =counterSlice.actions;
  export default counterSlice;