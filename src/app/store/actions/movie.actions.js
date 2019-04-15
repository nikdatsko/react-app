import axios from "axios";
import * as endpoints from "../../endpoints";

export const LoadMovie = id => {
  return dispatch => {
    return dispatch({
      type: "LOAD_MOVIE",
      payload: axios.get(`${endpoints.GET_MOVIES_ENDPOINT}/${id}`)
    });
  };
};

export const LoadGenre = params => {
  return dispatch => {
    return dispatch({
      type: "LOAD_GENRE",
      payload: axios.get(endpoints.GET_MOVIES_ENDPOINT, {
        params: { ...params }
      })
    });
  };
};
