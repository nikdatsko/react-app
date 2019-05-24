import axios from 'axios';
import GET_MOVIES_ENDPOINT from '../../endpoints';

export const LoadMovie = id => dispatch => dispatch({
  type: 'LOAD_MOVIE',
  payload: axios.get(`${GET_MOVIES_ENDPOINT}/${id}`),
});

export const LoadGenre = params => dispatch => dispatch({
  type: 'LOAD_GENRE',
  payload: axios.get(GET_MOVIES_ENDPOINT, {
    params: { ...params },
  }),
});
