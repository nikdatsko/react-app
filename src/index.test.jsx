import ReactDOM from "react-dom";
import { mock } from "jest";
import { renderToDOM } from "./index";

describe("test ReactDOM.hydrate", () => {
  const originalRender = ReactDOM.hydrate;
  const originalGetElement = global.document.getElementById;
  beforeEach(() => {
    global.document.getElementById = () => true;
    ReactDOM.hydrate = jest.fn();
  });
  afterAll(() => {
    global.document.getElementById = originalGetElement;
    ReactDOM.hydrate = originalRender;
  });
  it("should call ReactDOM.hydrate", () => {
    renderToDOM();
    expect(ReactDOM.hydrate).toHaveBeenCalled();
  });
});
