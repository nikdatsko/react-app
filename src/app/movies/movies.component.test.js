import React from "react";
import ReactDOM from "react-dom";
import MoviesComponent from "./movies.component";
import { BrowserRouter as Router } from "react-router-dom";

describe("MoviesComponent", () => {
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
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <MoviesComponent movies={movies} />
      </Router>,
      div
    );
    expect(div).toMatchSnapshot();
  });
});
