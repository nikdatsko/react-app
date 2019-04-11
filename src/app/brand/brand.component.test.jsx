import React from "react";
import ReactDOM from "react-dom";
import BrandComponent from "./brand.component";

describe("BrandComponent", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrandComponent />, div);
    expect(div).toMatchSnapshot();
  });
});
