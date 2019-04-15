import * as fromActions from "../actions/movie.actions";
import { ActionType } from "redux-promise-middleware";

export const initialState = {
  id: "",
  title: "",
  tagline: "",
  vote_average: "",
  vote_count: "",
  release_date: "",
  poster_path: "",
  overview: "",
  budget: "",
  revenue: "",
  genres: [],
  runtime: "",
  loading: false,
  genreMovies: [],
  loadingGenreMovies: false
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `LOAD_MOVIE_${ActionType.Pending}`:
      return {
        ...state,
        loading: true
      };

    case `LOAD_MOVIE_${ActionType.Fulfilled}`:
      return {
        ...state,
        ...payload.data,
        loading: false
      };

    case `LOAD_MOVIE_${ActionType.Rejected}`:
      return {
        ...state,
        loading: false
      };

    case `LOAD_GENRE_${ActionType.Pending}`:
      return {
        ...state,
        loadingGenreMovies: true
      };

    case `LOAD_GENRE_${ActionType.Fulfilled}`:
      const genreMovies = payload.data.data.reduce(
        (acc, item) => ({
          ...acc,
          [item.id]: item
        }),
        {}
      );
      return {
        ...state,
        genreMovies: genreMovies,
        loadingGenreMovies: false
      };

    case `LOAD_GENRE_${ActionType.Rejected}`:
      return {
        ...state,
        loadingGenreMovies: false
      };

    default:
      return state;
  }
};
