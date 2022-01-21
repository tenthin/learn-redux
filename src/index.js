import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import allReducer from  './reducers'

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
















// import { createStore } from 'redux'



// // STORE -> globalized state

// // ACTION -> Increment (action is a simple function that returns object)
// const increment = () => {
//   return{
//     type: 'INCREMENT'
//   }
// }
// const decrement = () => {
//   return{
//     type: 'DECREMENT'
//   }
// }

// // REDUCER -> Based on ACTION it modeifies the STORE
// const counter = (state = 0, action) => {
//   switch(action.type){
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// }

// let store = createStore(counter);

// // Display in console
// store.subscribe(() => console.log(store.getState()))

// // DISPATCH -> 
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());
