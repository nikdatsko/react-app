import React, { Component } from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./header/header.component";
import FooterComponent from "./footer/footer.component";
import StatusStripeComponent from "./status-stripe/status-stripe.component";
import MoviesComponent from "./movies/movies.component";
import ErrorBoundary from "./error-boundary";
import { connect } from "react-redux";
import * as fromStore from "./store";

class App extends Component {
  constructor() {
    super();
    this.searchByProps = ["title", "genres"];
    this.sortByProps = ["release_date", "rating"];
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchByChange = this.handleSearchByChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  componentDidMount() {
    this.props.loadMovies();
    this.props.setSearchBy(this.searchByProps[0]);
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    if (this.props.loading) {
      return;
    }
    const search = event.target.elements.search.value.toLowerCase();
    this.props.loadMovies({
      search,
      searchBy: this.props.searchBy,
      sortBy: this.props.sortBy
    });
  }

  handleSearchByChange(searchBy) {
    this.props.loadMovies({
      search: this.props.search,
      sortBy: this.props.sortBy,
      searchBy
    });
  }

  handleSortByChange(event, sortBy) {
    this.props.loadMovies({
      search: this.props.search,
      searchBy: this.props.searchBy,
      sortOrder: this.props.sortOrder === "desc" ? "asc" : "desc",
      sortBy
    });
    event.preventDefault();
  }

  render() {
    return (
      <ErrorBoundary>
        <HeaderComponent
          handleSearchSubmit={this.handleSearchSubmit}
          handleSearchByChange={this.handleSearchByChange}
          searchByProps={this.searchByProps}
          searchBy={this.props.searchBy}
        />
        <StatusStripeComponent
          handleSortByChange={this.handleSortByChange}
          count={this.props.total}
          sortByProps={this.sortByProps}
          sortBy={this.props.sortBy}
        />
        <MoviesComponent movies={this.props.data} />
        <FooterComponent />
      </ErrorBoundary>
    );
  }
}

const mapStatesToProps = state => {
  return { ...state.movies };
};

const mapDispatchToProps = dispatch => {
  return {
    loadMovies: params => dispatch(fromStore.LoadMovies(params)),
    setSearchBy: searchBy => dispatch(fromStore.SetSearchBy(searchBy))
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(App);
