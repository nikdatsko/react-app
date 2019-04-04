import axios from "axios";

const GET_MOVIES_ENDPOINT = "https://reactjs-cdp.herokuapp.com/movies";

class API {
  constructor(api) {
    this.api = api;
  }

  getMovies = () => {
    return this.api.get(GET_MOVIES_ENDPOINT);
  };
}

export default new API(axios);
