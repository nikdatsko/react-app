import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import * as fromMovies from './movies.reducer';
import * as fromMovie from './movie.reducer';

const rootReducer = combineReducers({
  movies: fromMovies.reducer,
  movie: fromMovie.reducer,
});

const initialState = typeof window !== 'undefined' && window && window.__REDUX_STATE__;

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, promise),
);

export default store;
