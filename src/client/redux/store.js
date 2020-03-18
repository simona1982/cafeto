import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

//Reducers
import currentYear from "./reducers/currentYear";
import results from "./reducers/results";

const reducer = combineReducers({
  currentYear,
  results
});

//const middlewares = [thunk];

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
