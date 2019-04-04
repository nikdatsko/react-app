import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app/app";
import store from "./app/store/reducers";

const root = document.getElementById("root");
function renderToDOM() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root || document.createElement("DIV")
  );
}
renderToDOM();
export { renderToDOM };
