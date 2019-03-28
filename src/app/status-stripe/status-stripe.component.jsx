import React, { Component } from "react";

class StatusStripeComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="d-flex justify-content-between align-items-center bg-light text-dark px-5 py-1 font-weight-bold">
        <span>
          {this.props.count} movie{this.props.count !== 1 ? "s" : ""} found
        </span>
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
