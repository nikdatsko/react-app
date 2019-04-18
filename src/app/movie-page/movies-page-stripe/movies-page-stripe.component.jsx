import React, { Component } from "react";

const MoviesPageStripe = props => (
  <div className="bg-light text-dark py-1 font-weight-bold">
    <div className="container d-flex justify-content-between align-items-center">
      <span>
        {!props.loading && `Films by ${props.genres && props.genres[0]}`}
      </span>
    </div>
  </div>
);
export default MoviesPageStripe;
