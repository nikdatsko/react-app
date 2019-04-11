import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app/app";
import * as fromStore from "./app/store";

const root = document.getElementById("root");
function renderToDOM() {
  ReactDOM.render(
    <Provider store={fromStore.store}>
      <App />
    </Provider>,
    root || document.createElement("DIV")
  );
}
renderToDOM();
export { renderToDOM };
