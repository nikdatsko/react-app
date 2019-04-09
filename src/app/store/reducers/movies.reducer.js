import * as fromActions from "../actions";
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
  limit: null
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `LOAD_MOVIES_${ActionType.Pending}`:
      return {
        ...state
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
        data: hashedData
      };

    case `LOAD_MOVIES_${ActionType.Rejected}`:
      return {
        ...state
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
