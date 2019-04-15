import React, { Component } from "react";
import ReactDOM from "react-dom";
import BrandComponent from "../brand/brand.component";
import FooterComponent from "../footer/footer.component";
import MoviesComponent from "../movies/movies.component";
import MoviePageHeader from "./movie-page-header/movie-page-header.component";
import MoviesPageStripe from "./movies-page-stripe/movies-page-stripe.component";
import ErrorBoundary from "../error-boundary";
import { connect } from "react-redux";
import * as fromStore from "../store";

class MoviePage extends Component {
  componentWillMount() {
    this.props.loadMovie(this.props.match.params.id);
    this.props.loadGenre({
      searchBy: "genres",
      limit: 6,
      search: this.props.genres[0]
    });
  }

  render() {
    const { ...props } = this.props;
    return (
      <ErrorBoundary>
        <MoviePageHeader {...props} />
        <MoviesPageStripe {...props} />
        <MoviesComponent movies={this.props.genreMovies} count={6} />
        <FooterComponent />
      </ErrorBoundary>
    );
  }
}

const mapStatesToProps = state => {
  return { ...state.movie };
};

const mapDispatchToProps = dispatch => {
  return {
    loadMovie: id => dispatch(fromStore.LoadMovie(id)),
    loadGenre: params => dispatch(fromStore.LoadGenre(params))
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(MoviePage);
