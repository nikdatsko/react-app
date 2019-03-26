import React, { Component } from "react";
import MovieComponent from "./movie/movie.component";

class MoviesComponent extends Component {
  constructor() {
    super();
  }
  render() {
    const movies = [
      {
        title: "Kill Bill",
        bg: "warning"
      },
      {
        title: "Pulp fiction",
        bg: "info"
      },
      {
        title: "Jackie Brown",
        bg: "danger"
      },
      {
        title: "Reservoir dogs",
        bg: "success"
      },
      {
        title: "Four rooms",
        bg: "primary"
      },
      {
        title: "Django Unchained",
        bg: "dark"
      }
    ];
    return (
      <div className="d-flex flex-wrap pt-4 px-2">
        {movies.map((movie, i) => (
          <div className="col-4 mb-4" key={i}>
            <MovieComponent title={movie.title} bg={movie.bg} />
          </div>
        ))}
      </div>
    );
  }
}
export default MoviesComponent;
