import React from "react";
import ReactDOM from "react-dom";
import MovieComponent from "./movie.component";

describe("MovieComponent", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MovieComponent />, div);
    expect(div).toMatchSnapshot();
  });
});
