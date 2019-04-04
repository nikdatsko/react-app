import * as fromActions from "../actions";

export const initialState = {
  data: [],
  total: null,
  offset: null,
  sortBy: null,
  sortOrder: null,
  search: null,
  searchBy: null,
  filter: null,
  offset: null,
  limit: null,
  loading: false,
  loaded: false
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case fromActions.LOAD_MOVIES:
      return {
        ...state,
        loading: true
      };

    case fromActions.LOAD_MOVIES_SUCCESS:
      // console.log(payload);
      return {
        ...state,
        ...payload,
        loading: false,
        loaded: true
      };

    case fromActions.LOAD_MOVIES_FINALIZE:
      return {
        ...state,
        loading: false
      };

    case fromActions.SET_SEARCH_BY:
      return {
        ...state,
        searchBy: payload
      };

    default:
      return state;
  }
};
