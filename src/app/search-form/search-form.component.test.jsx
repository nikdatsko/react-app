import React from "react";
import ReactDOM from "react-dom";
import SearchFormComponent from "./search-form.component";

describe("SearchFormComponent", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <SearchFormComponent searchByProps={["title", "genre"]} />,
      div
    );
    expect(div).toMatchSnapshot();
  });
});
