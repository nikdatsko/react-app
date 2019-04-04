import React from "react";

const MovieComponent = props => (
  <div className="small">
    <img className="w-100 mb-1" src={props.image} alt={props.title} />
    <div className="d-flex justify-content-between align-items-center">
      <span className="text-uppercase font-weight-bold">{props.title}</span>
      <span className="border border-secondary rounded small px-2">
        {props.release_date}
      </span>
    </div>
    <div className="small text-secondary">{props.genre}</div>
  </div>
);
export default MovieComponent;
