import * as fromReducer from "./movies.reducer";

describe("movies Reducer", () => {
  const initialState = {
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

  it("returns the initial state when an action type is not passed", () => {
    const reducer = fromReducer.reducer(undefined, {});

    expect(reducer).toEqual(initialState);
  });

  it("handles GET_USERS_PENDING as expected", () => {
    const reducer = fromReducer.reducer(initialState, {
      type: "LOAD_MOVIES_PENDING"
    });

    expect(reducer).toEqual({
      ...initialState,
      loading: true
    });
  });

  it("handles LOAD_MOVIES_REJECTED as expected", () => {
    const reducer = fromReducer.reducer(
      {
        ...initialState,
        loading: true
      },
      {
        type: "LOAD_MOVIES_REJECTED"
      }
    );

    expect(reducer).toEqual({
      ...initialState,
      loading: false
    });
  });

  it("handles LOAD_MOVIES_FULFILLED as expected", () => {
    const reducer = fromReducer.reducer(
      {
        ...initialState,
        loading: true
      },
      {
        type: "LOAD_MOVIES_FULFILLED",
        payload: {
          data: {
            data: [
              {
                id: 1
              }
            ],
            total: 3000
          },
          config: {
            params: {
              search: "a",
              searchBy: "title"
            }
          }
        }
      }
    );

    expect(reducer).toEqual({
      data: {
        1: {
          id: 1
        }
      },
      total: 3000,
      offset: 0,
      sortBy: null,
      sortOrder: null,
      search: "a",
      searchBy: "title",
      filter: null,
      limit: null,
      loading: false
    });
  });

  it("handles LOAD_LOCAL_STORE as expected", () => {
    const reducer = fromReducer.reducer(initialState, {
      type: "LOAD_LOCAL_STORE",
      payload: {
        data: {
          1: {
            id: 1
          }
        },
        total: 3000,
        offset: 0,
        sortBy: "a",
        sortOrder: "asc",
        search: "a",
        searchBy: "b",
        filter: null,
        limit: null
      }
    });

    expect(reducer).toEqual({
      data: {
        1: {
          id: 1
        }
      },
      total: 3000,
      offset: 0,
      sortBy: "a",
      sortOrder: "asc",
      search: "a",
      searchBy: "b",
      filter: null,
      limit: null,
      loading: false
    });
  });
});
