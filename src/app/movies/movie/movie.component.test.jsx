import React from "react";
import ReactDOM from "react-dom";
import MovieComponent from "./movie.component";
import { BrowserRouter as Router } from "react-router-dom";

describe("MovieComponent", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <MovieComponent />
      </Router>,
      div
    );
    expect(div).toMatchSnapshot();
  });
});
