import React from "react";
import ReactDOM from "react-dom";
import MoviesComponent from "./movies.component";

describe("MoviesComponent", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const movies = [
      {
        id: "1",
        title: "Kill Bill",
        image:
          "//upload.wikimedia.org/wikipedia/en/2/2c/Kill_Bill_Volume_1.png",
        release_date: "2003",
        genre: "Action & Adventure",
        rating: 3,
        director: "Quentin Tarantino"
      },
      {
        id: "2",
        title: "Pulp fiction",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
        release_date: "1994",
        genre: "Oscar-winning movies",
        rating: 5,
        director: "Quentin Tarantino"
      },
      {
        id: "3",
        title: "Jackie Brown",
        image:
          "https://upload.wikimedia.org/wikipedia/en/8/89/Jackie_Brown_%281997%29.png",
        release_date: "1997",
        genre: "Dramas",
        rating: 1,
        director: "Quentin Tarantino"
      },
      {
        id: "4",
        title: "Reservoir dogs",
        image:
          "https://upload.wikimedia.org/wikipedia/en/0/01/Reservoir_Dogs.png",
        release_date: "1992",
        genre: "Independant movies",
        rating: 2,
        director: "Quentin Tarantino"
      },
      {
        id: "5",
        title: "Four rooms",
        image:
          "https://upload.wikimedia.org/wikipedia/en/c/c8/Four_rooms_ver2.jpg",
        release_date: "1995",
        genre: "Comedies",
        rating: 3,
        director: "Quentin Tarantino"
      },
      {
        id: "6",
        title: "Django Unchained",
        image:
          "https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg",
        release_date: "2012",
        genre: "Dramas",
        rating: 4,
        director: "Quentin Tarantino"
      }
    ];
    ReactDOM.render(<MoviesComponent movies={movies} />, div);
    expect(div).toMatchSnapshot();
  });
});
