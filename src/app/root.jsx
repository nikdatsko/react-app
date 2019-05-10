import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import App from "./app";
import MoviePage from "./movie-page/movie-page.component";
import NotFound from "./not-found/not-found.component";

const Root = ({ Router, location, context, store }) => (
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

Root.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  }).isRequired
};
Root.defaultProps = {
  location: null,
  context: null
};

export default hot(module)(Root);
