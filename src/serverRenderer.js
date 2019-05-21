// @flow

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Root from "./app/root";
import store from "./app/store/reducers";

function renderHTML(html, state) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>Mykyta Datsko React app ssr</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
        </head>
        <body>
          <div id="root">${html}</div>
          <script>window.__REDUX_STATE__ = ${JSON.stringify(state).replace(
            /</g,
            "\\u003c"
          )}</script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    // This context object contains the results of the render
    const context = {};

    const renderRoot = () => (
      <Root
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    renderToString(renderRoot());

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      res.writeHead(302, {
        Location: context.url
      });
      res.end();
      return;
    }

    const htmlString = renderToString(renderRoot());
    const state = store.getState();

    res.send(renderHTML(htmlString, state));
  };
}
