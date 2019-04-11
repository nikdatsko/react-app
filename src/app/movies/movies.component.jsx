import React from "react";
import MovieComponent from "./movie/movie.component";

const MoviesComponent = props => (
  <div className="container">
    <div
      className="row d-flex flex-wrap pt-4"
      style={{ minHeight: "calc(100vh - 280px)" }}
    >
      {Object.keys(props.movies).map(key => (
        <div className="col-4 col-lg-3 mb-4" key={key}>
          <MovieComponent {...props.movies[key]} />
        </div>
      ))}
    </div>
  </div>
);
export default MoviesComponent;
