import { useSelector, useDispatch, connect } from "react-redux";
import { Component } from "react";
import classes from "./Counter.module.css";
import { counterACtions } from "../Store/counter";

const Counter = () => {
  const show=useSelector(state=>state.counter.showCounter)
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter); //redux
  const toggleCounterHandler = () => {

    dispatch(counterACtions.toggleCounter());
  };



  const increementHandler = () => {
    dispatch(counterACtions.increment());
  };
  const decreementHAndler = () => {
    dispatch(counterACtions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterACtions.increase(5));//{type:'uniq identifier',payload:10}
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increementHandler}> Increment</button>
        <button onClick={increaseHandler}> Increment by 5</button>
        <button onClick={decreementHAndler}>Decriment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;
// class Counter extends Component {
//   increementHandler(){
// this.props.increment();
//   }

//   decreementHAndler(){
// this.props.decrement();
//   }

//   toggleCounterHandler(){

//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.increementHandler.bind(this)}> Increment</button>
//           <button onClick={this.decreementHAndler.bind(this)}>Decriment</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps=state=>{
//   return {
//     counter:state.counter
//   };
// }

// const mapDispatchToProps=dispatch=>{
// return{
//   increment:()=>dispatch({type:'increment'}),
//   decrement:()=>dispatch({type:'decrement'})
// }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
