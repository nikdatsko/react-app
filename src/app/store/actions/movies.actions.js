import axios from "axios";

export const LOAD_MOVIES_SUCCESS = "Load movies succees";
export const LOAD_LOCAL_STORE = "Load local store";

const GET_MOVIES_ENDPOINT = "https://reactjs-cdp.herokuapp.com/movies";
export const LoadMovies = params => {
  return dispatch => {
    axios
      .get(GET_MOVIES_ENDPOINT, {
        params: { ...params }
      })
      .then(response => {
        dispatch(LoadMoviesSuccess({ ...response.data, ...params }));
      });
  };
};

export const LoadMoviesSuccess = data => ({
  type: LOAD_MOVIES_SUCCESS,
  payload: data
});

export const LoadLocalStore = data => ({
  type: LOAD_LOCAL_STORE,
  payload: data
});
