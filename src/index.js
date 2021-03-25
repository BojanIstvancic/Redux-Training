import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
// WE MUST CRATE STORE
import allReducers from "./reducers/index";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// WE PASS ALL REDUCERS TO STORE

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

/*
HOW TO USE REDUX:
1. install redux (store), react-redux (library for connecting the react and redux)
2. create reducers and actions
3. combine reducers in index.js
4. create store and pass the reducers and a piece of code for Redux Dev Tools extension to work
5. Wrapp the app in <Provider store={store} - pass the store
6. 
  - import { useSelector } from "react-redux"; -> to pick up the data from store
  - const counter = useSelector((state) => state.counter); - pull the data
  - <h1>Counter: {counter}</h1> - use data
7. 
  - import { useDispatch } from "react-redux"; - pull the dispatch (we can actvate the function inside the reducer depending on the type)
  - const dispatch = useDispatch(); - define the displatch
  - <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button> - dispatch the action
*/
