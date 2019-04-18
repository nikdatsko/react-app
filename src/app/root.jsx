import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./app";
import MoviePage from "./movie-page/movie-page.component";
import NotFound from "./not-found/not-found.component";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
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
  store: PropTypes.object.isRequired
};

export default Root;
