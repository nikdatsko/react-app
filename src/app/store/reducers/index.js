import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import * as fromMovies from "./movies.reducer";
import * as fromMovie from "./movie.reducer";

const rootReducer = combineReducers({
  movies: fromMovies.reducer,
  movie: fromMovie.reducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk, promise));
