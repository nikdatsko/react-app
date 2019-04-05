import * as fromActions from "../actions";

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
    case fromActions.LOAD_MOVIES_SUCCESS:
      const hashedData = payload.data.reduce(
        (acc, item) => ({
          ...acc,
          [item.id]: item
        }),
        {}
      );
      return {
        ...state,
        ...payload,
        data: !payload.offset ? hashedData : { ...state.data, ...hashedData }
      };

    default:
      return state;
  }
};
