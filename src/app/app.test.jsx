import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import App from "./app";
import HeaderComponent from "./header/header.component";
import StatusStripeComponent from "./status-stripe/status-stripe.component";
import MoviesComponent from "./movies/movies.component";
import FooterComponent from "./footer/footer.component";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter as Router, Route } from "react-router-dom";
import thunk from "redux-thunk";
import * as fromStore from "./store";

describe("App", () => {
  const movies = [
    {
      id: "1",
      title: "Kill Bill",
      poster_path:
        "//upload.wikimedia.org/wikipedia/en/2/2c/Kill_Bill_Volume_1.png",
      release_date: "2003",
      genres: ["Action & Adventure"],
      rating: 3,
      director: "Quentin Tarantino"
    },
    {
      id: "2",
      title: "Pulp fiction",
      poster_path:
        "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
      release_date: "1994",
      genres: ["Oscar-winning movies"],
      rating: 5,
      director: "Quentin Tarantino"
    },
    {
      id: "3",
      title: "Jackie Brown",
      poster_path:
        "https://upload.wikimedia.org/wikipedia/en/8/89/Jackie_Brown_%281997%29.png",
      release_date: "1997",
      genres: ["Dramas"],
      rating: 1,
      director: "Quentin Tarantino"
    },
    {
      id: "4",
      title: "Reservoir dogs",
      poster_path:
        "https://upload.wikimedia.org/wikipedia/en/0/01/Reservoir_Dogs.png",
      release_date: "1992",
      genres: ["Independant movies"],
      rating: 2,
      director: "Quentin Tarantino"
    },
    {
      id: "5",
      title: "Four rooms",
      poster_path:
        "https://upload.wikimedia.org/wikipedia/en/c/c8/Four_rooms_ver2.jpg",
      release_date: "1995",
      genres: ["Comedies"],
      rating: 3,
      director: "Quentin Tarantino"
    },
    {
      id: "6",
      title: "Django Unchained",
      poster_path:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg",
      release_date: "2012",
      genres: ["Dramas"],
      rating: 4,
      director: "Quentin Tarantino"
    }
  ];
  const initialState = {
    movies: {
      data: {},
      total: null,
      offset: 0,
      sortBy: null,
      sortOrder: null,
      search: "",
      searchBy: null,
      filter: null,
      limit: null
    }
  };
  const mockStore = configureStore([thunk]);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    const store = mockStore(initialState);
    const match = {
      params: {
        query: ""
      }
    };
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <App match={match} />
        </Router>
      </Provider>,
      div
    );
    expect(div).toMatchSnapshot();
  });
});
