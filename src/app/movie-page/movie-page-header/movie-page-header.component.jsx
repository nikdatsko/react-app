import React from "react";
import { Link } from "react-router-dom";
import BrandComponent from "../../brand/brand.component";

const HeaderComponent = props => (
  <header className="bg-dark text-light pt-2 pb-4">
    <div className="container">
      <Link to="/" className="btn btn-light btn-sm float-right py-0">
        <span className="small text-danger text-uppercase font-weight-bold">
          Search
        </span>
      </Link>
      <BrandComponent />
      {!props.loading && (
        <div className="pt-4 row">
          <div className="col-4">
            <img className="w-100" src={props.poster_path} alt={props.title} />
          </div>
          <div className="col-8 pl-4">
            <span className="h2 text-danger">
              {props.title}
              <span
                className="align-items-center border border-success d-inline-flex justify-content-center ml-3 rounded-circle small text-success"
                style={{ width: "1.8em", height: "1.8em" }}
              >
                {props.vote_average}
              </span>
            </span>
            <p>{props.genres && props.genres.join(", ")}</p>
            <p className="font-weight-bold">
              <span className="pr-5">
                {props.release_date && props.release_date.split("-")[0]}
              </span>
              <span>{props.runtime} min</span>
            </p>
            <div className="pt-3">{props.overview}</div>
          </div>
        </div>
      )}
    </div>
  </header>
);
export default HeaderComponent;
