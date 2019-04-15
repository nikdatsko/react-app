import * as fromActions from "../actions/movies.actions";
import { ActionType } from "redux-promise-middleware";

export const initialState = {
  data: {},
  total: null,
  offset: 0,
  sortBy: null,
  sortOrder: null,
  search: "",
  searchBy: null,
  filter: null,
  limit: null,
  loading: false
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `LOAD_MOVIES_${ActionType.Pending}`:
      return {
        ...state,
        loading: true
      };

    case `LOAD_MOVIES_${ActionType.Fulfilled}`:
      const hashedData = payload.data.data.reduce(
        (acc, item) => ({
          ...acc,
          [item.id]: item
        }),
        {}
      );
      return {
        ...state,
        ...payload.data,
        ...payload.config.params,
        data: hashedData,
        loading: false
      };

    case `LOAD_MOVIES_${ActionType.Rejected}`:
      return {
        ...state,
        loading: false
      };

    case "LOAD_LOCAL_STORE":
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};
