import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
// WE MUST COMBINE ALL REDUCERS

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
