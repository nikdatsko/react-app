import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import * as fromMovies from "./movies.reducer";

const rootReducer = combineReducers({
  movies: fromMovies.reducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
