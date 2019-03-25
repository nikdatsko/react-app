import React, { Component } from "react";
import MovieComponent from "./movie/movie.component";

class MoviesComponent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <MovieComponent title="Kill Bill" />
        <MovieComponent title="Pulp fiction" />
        <MovieComponent title="Jackie Brown" />
        <MovieComponent title="Reservoir dogs" />
        <MovieComponent title="Four rooms" />
      </div>
    );
  }
}
export default MoviesComponent;
