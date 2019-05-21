import React from "react";
import { storiesOf } from "@storybook/react";
import { StaticRouter } from "react-router-dom";
import MovieComponent from "./../src/app/movies/movie/movie.component";

const movieProps = {
  id: 469052,
  title: "Gaston Lagaffe",
  tagline: "",
  vote_average: 0,
  vote_count: 0,
  release_date: "2018-04-04",
  poster_path:
    "https://image.tmdb.org/t/p/w500/kic42Lz8foU8hsbG4Wsk6uCdBtL.jpg",
  overview: "",
  budget: 0,
  revenue: 0,
  genres: ["Comedy"],
  runtime: null
};

storiesOf("Movie", module)
  .addDecorator(story => (
    <StaticRouter initialEntries={["/"]}>{story()}</StaticRouter>
  ))
  .add("movie", () => <MovieComponent {...movieProps} />);
