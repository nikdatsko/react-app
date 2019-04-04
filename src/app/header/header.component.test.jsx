import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./header.component";

describe("HeaderComponent", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <HeaderComponent searchByProps={["title", "genres"]} />,
      div
    );
    expect(div).toMatchSnapshot();
  });
});
