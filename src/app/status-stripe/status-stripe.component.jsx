import React, { Component } from "react";

const StatusStripeComponent = props => (
  <div className="bg-light text-dark py-1 font-weight-bold">
    <div className="container d-flex justify-content-between align-items-center">
      <span>
        {props.count &&
          `${props.count} movie${props.count !== 1 ? "s" : ""} found`}
      </span>
      <div>
        <span>Sort by</span>
        {props.sortByProps.map(prop => (
          <a
            href="#"
            role="button"
            key={prop}
            className={
              "ml-4 " + (prop === props.sortBy ? "text-danger" : "text-dark")
            }
            onClick={e => props.handleSortByChange(e, prop)}
          >
            {prop.replace("_", " ")}
          </a>
        ))}
      </div>
    </div>
  </div>
);
export default StatusStripeComponent;
