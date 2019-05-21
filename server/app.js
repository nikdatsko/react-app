const express = require("express");

const app = express();
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackHotServerMiddleware = require("webpack-hot-server-middleware");
const webpackConfig = require("../webpack");

const compiler = webpack(webpackConfig);

if (process.env.NODE_ENV === "development") {
  app.use(webpackDevMiddleware(compiler));
  app.use(
    webpackHotMiddleware(compiler.compilers.find(c => c.name === "client"))
  );
  app.use(webpackHotServerMiddleware(compiler));
} else {
  app.use(express.static("public"));

  const serverRenderer = require("../public/js/serverRenderer").default; // eslint-disable-line
  app.use(serverRenderer());
}

module.exports = app;
