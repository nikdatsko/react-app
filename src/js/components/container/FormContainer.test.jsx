import React from "react";
import ReactDOM from "react-dom";
import FormContainer from "./FormContainer";

describe("FormContainer", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FormContainer />, div);
    expect(div).toMatchSnapshot();
  });
});
