import React from "react";
import ReactDOM from "react-dom";
import StatusStripeComponent from "./status-stripe.component";

describe("StatusStripeComponent", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <StatusStripeComponent sortByProps={["release_date", "rating"]} />,
      div
    );
    expect(div).toMatchSnapshot();
  });
});
