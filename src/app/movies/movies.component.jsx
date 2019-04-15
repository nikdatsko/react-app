import React from "react";
import MovieComponent from "./movie/movie.component";

const MoviesComponent = props => (
  <div className="container" style={{ minHeight: "calc(100vh - 280px)" }}>
    <div className="row d-flex flex-wrap pt-4">
      {Object.keys(props.movies).map(key => (
        <div className="col-4 col-lg-3 mb-4" key={key}>
          <MovieComponent {...props.movies[key]} />
        </div>
      ))}
    </div>
    {!props.count && (
      <p className="text-center m-0">
        {props.count === 0
          ? "Try to search for something else."
          : "Go ahead and search for a movie."}
      </p>
    )}
  </div>
);
export default MoviesComponent;
