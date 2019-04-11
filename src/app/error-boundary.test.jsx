import React from "react";
import { shallow } from "enzyme";
import ErrorBoundary from "./error-boundary";

describe("When no JS errors are caught in a child component", () => {
  let ErrorBoundaryComponent;

  beforeAll(() => {
    ErrorBoundaryComponent = shallow(
      <ErrorBoundary>
        <h1>wassup</h1>
      </ErrorBoundary>
    );
  });

  it("should render the child component", () => {
    expect(ErrorBoundaryComponent.find("h1").exists()).toBeTruthy();
  });
});

describe("When a JS error is caught in a child component", () => {
  let ErrorBoundaryComponent;

  beforeAll(() => {
    ErrorBoundaryComponent = shallow(
      <ErrorBoundary>
        <h1>wassup</h1>
      </ErrorBoundary>
    );
    ErrorBoundaryComponent.instance().componentDidCatch("error", "error info");
    ErrorBoundaryComponent.update();
  });

  it("should update the state to indicate an error", () => {
    expect(ErrorBoundaryComponent.instance().state.error).toBe("error");
    expect(ErrorBoundaryComponent.instance().state.errorInfo).toBe(
      "error info"
    );
  });

  it("should not render the child component", () => {
    expect(ErrorBoundaryComponent.find("h1").exists()).toBeFalsy();
  });
});
