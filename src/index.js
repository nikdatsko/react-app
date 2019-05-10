import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Root from "./app/root";
import * as fromStore from "./app/store";

const root = document.getElementById("root");
function renderToDOM() {
  ReactDOM.hydrate(
    <Root store={fromStore.store} Router={BrowserRouter} />,
    root || document.createElement("DIV")
  );
}
renderToDOM();
export { renderToDOM };
