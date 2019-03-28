import React, { Component } from "react";
import MovieComponent from "./movie/movie.component";

class MoviesComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="d-flex flex-wrap pt-4 px-2">
        {this.props.movies.map((movie, i) => (
          <div className="col-4 mb-4" key={i}>
            <MovieComponent title={movie.title} bg={movie.bg} />
          </div>
        ))}
      </div>
    );
  }
}
export default MoviesComponent;
