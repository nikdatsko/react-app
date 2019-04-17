import React from "react";
import { Link } from "react-router-dom";
import BrandComponent from "../../brand/brand.component";
import MoviesPageMovie from "../movie-page-movie/movie-page-movie.component";

const HeaderComponent = props => (
  <header className="bg-dark text-light pt-2 pb-4">
    <div className="container">
      <Link to="/" className="btn btn-light btn-sm float-right py-0">
        <span className="small text-danger text-uppercase font-weight-bold">
          Search
        </span>
      </Link>
      <BrandComponent />
      <MoviesPageMovie {...props} />
    </div>
  </header>
);
export default HeaderComponent;
