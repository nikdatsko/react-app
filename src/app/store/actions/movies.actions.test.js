import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import promise from "redux-promise-middleware";
import * as fromActions from "./movies.actions";

jest.mock("axios");

describe("Movies actions", () => {
  const state = {
    data: {}
  };
  const mockStore = configureMockStore([thunk, promise]);

  it("should have correct LoadMovies", async () => {
    const store = mockStore(state);
    const mockData = { ...state, data: [{ id: "1" }] };
    const actions = [
      { type: "LOAD_MOVIES_PENDING" },
      { type: "LOAD_MOVIES_FULFILLED", payload: mockData }
    ];
    axios.get.mockResolvedValue(mockData);
    await store.dispatch(fromActions.LoadMovies());
    expect.assertions(4);
    expect(actions[0].type).toEqual("LOAD_MOVIES_PENDING");
    expect(actions[1].type).toEqual("LOAD_MOVIES_FULFILLED");
    expect(actions[1].payload.data[0].id).toEqual("1");
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it("should have correct LoadLocalStore", () => {
    const loadLocalStore = fromActions.LoadLocalStore(state);
    expect(loadLocalStore).toEqual({
      type: "LOAD_LOCAL_STORE",
      payload: state
    });
  });
});
