import axios from "axios";
import * as endpoints from "../../endpoints";

export const LoadMovies = params => {
  return dispatch => {
    return dispatch({
      type: "LOAD_MOVIES",
      payload: axios.get(endpoints.GET_MOVIES_ENDPOINT, {
        params: { ...params }
      })
    });
  };
};

export const LoadLocalStore = data => ({
  type: "LOAD_LOCAL_STORE",
  payload: data
});
