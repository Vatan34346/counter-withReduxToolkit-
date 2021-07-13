import { createStore } from "redux";
import {configureStore} from '@reduxjs/toolkit';//createStore for redux
import counterSlice from './counter';
import authSlice from "./auth";



// //redux
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter:state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };
const store = configureStore({
  reducer:{counter:counterSlice.reducer,auth:authSlice.reducer}
});


export default store;