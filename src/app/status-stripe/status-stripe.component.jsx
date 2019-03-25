import React, { Component } from "react";

class StatusStripeComponent extends Component {
  render() {
    return (
      <div>
        <span>7 movies found</span>
        <span>Sort by</span>
        <a>release date</a>
        <a>rating</a>
      </div>
    );
  }
}
export default StatusStripeComponent;
