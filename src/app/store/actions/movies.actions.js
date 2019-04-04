import axios from "axios";

export const LOAD_MOVIES = "Load movies";
export const LOAD_MOVIES_SUCCESS = "Load movies succees";
export const LOAD_MOVIES_FINALIZE = "Load movies finalize";
export const SET_SEARCH_BY = "Set search by";

const GET_MOVIES_ENDPOINT = "https://reactjs-cdp.herokuapp.com/movies";
export const LoadMovies = params => {
  return (dispatch, getState) => {
    axios
      .get(GET_MOVIES_ENDPOINT, {
        params: { ...params }
      })
      .then(function(response) {
        dispatch(LoadMoviesSuccess({ ...response.data, ...params }));
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {
        dispatch(LoadMoviesFinalize());
      });
  };
};

export const LoadMoviesSuccess = data => ({
  type: LOAD_MOVIES_SUCCESS,
  payload: data
});

export const LoadMoviesFinalize = () => ({
  type: LOAD_MOVIES_FINALIZE
});

export const SetSearchBy = searchBy => ({
  type: SET_SEARCH_BY,
  payload: searchBy
});
