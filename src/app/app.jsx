import React, { Component } from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./header/header.component";
import FooterComponent from "./footer/footer.component";
import StatusStripeComponent from "./status-stripe/status-stripe.component";
import MoviesComponent from "./movies/movies.component";
import ErrorBoundary from "./error-boundary";
import { connect } from "react-redux";
import * as actions from "./store/actions";
import * as selectors from "./store/selectors";
import store from "./store/reducers";

class App extends Component {
  constructor() {
    super();
    this.moviesStoreKey = "moviesStore";
    this.searchByProps = ["title", "genres"];
    this.sortByProps = ["release_date", "vote_average"];
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchByChange = this.handleSearchByChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  componentWillMount() {
    const moviesStore =
      typeof window !== "undefined" &&
      localStorage.getItem(this.moviesStoreKey);
    const search = this.props.match.params.query;
    if (!!search) {
      this.props.loadMovies({
        searchBy: this.searchByProps[0],
        search
      });
    } else if (!!moviesStore) {
      this.props.loadLocalStore(JSON.parse(moviesStore));
    }
  }

  componentDidUpdate() {
    const moviesState = store.getState().movies;
    localStorage.setItem(this.moviesStoreKey, JSON.stringify(moviesState));
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    const search = event.target.elements.search.value.toLowerCase();
    if (search === this.props.search) {
      return;
    }
    this.props.loadMovies({
      search: search,
      searchBy: this.props.searchBy || this.searchByProps[0],
      sortBy: this.props.sortBy,
      sortOrder: this.props.sortOrder
    });
    this.props.history.push(search ? `/search/${search}` : "");
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
          search={this.props.search}
        />
        <StatusStripeComponent
          handleSortByChange={this.handleSortByChange}
          count={this.props.total}
          loading={this.props.loading}
          sortByProps={this.sortByProps}
          sortBy={this.props.sortBy}
        />
        <MoviesComponent movies={this.props.data} count={this.props.total} />
        <FooterComponent />
      </ErrorBoundary>
    );
  }
}

const makeMapStateToProps = () => {
  const getDataState = selectors.makeGetDataState();
  const getTotalState = selectors.makeGetTotalState();
  const getOffsetState = selectors.makeGetOffsetState();
  const getSortByState = selectors.makeGetSortByState();
  const getSortOrderState = selectors.makeGetSortOrderState();
  const getSearchState = selectors.makeGetSearchState();
  const getSearchByState = selectors.makeGetSearchByState();
  const getFilterState = selectors.makeGetFilterState();
  const getLimitState = selectors.makeGetLimitState();
  const getLoadingState = selectors.makeGetLoadingState();
  return state => ({
    data: getDataState(state),
    total: getTotalState(state),
    offset: getOffsetState(state),
    sortBy: getSortByState(state),
    sortOrder: getSortOrderState(state),
    search: getSearchState(state),
    searchBy: getSearchByState(state),
    filter: getFilterState(state),
    limit: getLimitState(state),
    loading: getLoadingState(state)
  });
  return mapStateToProps;
};

const mapDispatchToProps = dispatch => {
  return {
    loadMovies: params =>
      dispatch(actions.LoadMovies({ ...params, limit: 12 })),
    loadLocalStore: params => dispatch(actions.LoadLocalStore({ ...params }))
  };
};

export default connect(makeMapStateToProps, mapDispatchToProps)(App);
