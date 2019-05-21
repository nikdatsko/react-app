// @flow

import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import App from "./app";
import MoviePage from "./movie-page/movie-page.component";
import NotFound from "./not-found/not-found.component";

type Context = {
  url: number
};

type Store = {
  dispatch: Function,
  getState: Function
};

type RootType = {
  Router: Function,
  location?: string,
  context?: Context,
  store: Store
};

const Root = ({ Router, location, context, store }: RootType) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/search/:query" component={App} />
        <Route
          path="/film/:id"
          render={props => <MoviePage key={props.match.params.id} {...props} />}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

Root.defaultProps = {
  location: null,
  context: null
};

export default hot(module)(Root);
