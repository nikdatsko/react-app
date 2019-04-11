import axios from "axios";

const GET_MOVIES_ENDPOINT = "https://reactjs-cdp.herokuapp.com/movies";

export const LoadMovies = params => {
  return dispatch => {
    return dispatch({
      type: "LOAD_MOVIES",
      payload: axios.get(GET_MOVIES_ENDPOINT, {
        params: { ...params }
      })
    });
  };
};

export const LoadLocalStore = data => ({
  type: "LOAD_LOCAL_STORE",
  payload: data
});
