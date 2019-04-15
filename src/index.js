import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Root from "./app/root";
import * as fromStore from "./app/store";

const root = document.getElementById("root");
function renderToDOM() {
  ReactDOM.render(
    <Root store={fromStore.store} />,
    root || document.createElement("DIV")
  );
}
renderToDOM();
export { renderToDOM };
