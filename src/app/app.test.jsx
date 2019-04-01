import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import App from "./app";
import HeaderComponent from "./header/header.component";
import StatusStripeComponent from "./status-stripe/status-stripe.component";
import MoviesComponent from "./movies/movies.component";
import FooterComponent from "./footer/footer.component";

describe("App", () => {
  const wrapped = shallow(<App />);

  it("Should render a HeaderComponent", () => {
    expect(wrapped.find(HeaderComponent).length).toBe(1);
  });

  it("Should render a StatusStripeComponent", () => {
    expect(wrapped.find(StatusStripeComponent).length).toBe(1);
  });

  it("Should render a MoviesComponent", () => {
    expect(wrapped.find(MoviesComponent).length).toBe(1);
  });

  it("Should render a FooterComponent", () => {
    expect(wrapped.find(FooterComponent).length).toBe(1);
  });
});
