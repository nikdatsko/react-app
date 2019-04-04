import React from "react";
import MovieComponent from "./movie/movie.component";

const MoviesComponent = props => (
  <div className="container">
    <div className="row d-flex flex-wrap pt-4">
      {props.movies.map(movie => (
        <div className="col-4 col-lg-3 mb-4" key={movie.id}>
          <MovieComponent {...movie} />
        </div>
      ))}
    </div>
  </div>
);
export default MoviesComponent;
