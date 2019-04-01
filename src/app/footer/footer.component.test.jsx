import React from "react";
import ReactDOM from "react-dom";
import FooterComponent from "./footer.component";

describe("FooterComponent", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FooterComponent />, div);
    expect(div).toMatchSnapshot();
  });
});
