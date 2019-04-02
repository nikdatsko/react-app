import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app.jsx";

const root = document.getElementById("root");
function renderToDOM() {
  ReactDOM.render(<App />, root || document.createElement("DIV"));
}
renderToDOM();
export { renderToDOM };
