import axios from 'axios';
import GET_MOVIES_ENDPOINT from '../../endpoints';

export const LoadMovies = params => dispatch => dispatch({
  type: 'LOAD_MOVIES',
  payload: axios.get(GET_MOVIES_ENDPOINT, {
    params: { ...params },
  }),
});

export const LoadLocalStore = data => ({
  type: 'LOAD_LOCAL_STORE',
  payload: data,
});
