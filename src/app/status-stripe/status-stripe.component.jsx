import React, { Component } from "react";

class StatusStripeComponent extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between align-items-center bg-light text-dark px-5 py-1 font-weight-bold">
        <span>6 movies found</span>
        <div>
          <span>Sort by</span>
          <a className="mx-4">release date</a>
          <a className="text-danger">rating</a>
        </div>
      </div>
    );
  }
}
export default StatusStripeComponent;
