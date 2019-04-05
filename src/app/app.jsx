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
    this.sortByProps = ["release_date", "vote_average"];
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchByChange = this.handleSearchByChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  componentWillMount() {
    this.props.loadMovies({
      searchBy: this.searchByProps[0]
    });
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    const search = event.target.elements.search.value.toLowerCase();
    if (search === this.props.search) {
      return;
    }
    this.props.loadMovies({
      search: search,
      searchBy: this.props.searchBy,
      sortBy: this.props.sortBy,
      sortOrder: this.props.sortOrder
    });
  }

  handleSearchByChange(searchBy) {
    if (searchBy === this.props.searchBy) {
      return;
    }
    this.props.loadMovies({
      search: this.props.search,
      sortBy: this.props.sortBy,
      searchBy: searchBy,
      sortOrder: this.props.sortOrder
    });
  }

  handleSortByChange(event, sortBy) {
    event.preventDefault();
    let sortOrder = this.props.sortOrder || "desc";
    if (sortBy === this.props.sortBy) {
      sortOrder = this.props.sortOrder === "desc" ? "asc" : "desc";
    }

    this.props.loadMovies({
      search: this.props.search,
      searchBy: this.props.searchBy,
      sortOrder: sortOrder,
      sortBy: sortBy
    });
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
    loadMovies: params =>
      dispatch(fromStore.LoadMovies({ ...params, limit: 12 }))
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(App);
