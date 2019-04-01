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
          {this.props.sortByProps.map(prop => (
            <a
              href="#"
              role="button"
              key={prop}
              className={
                "ml-4 " +
                (prop === this.props.sortBy ? "text-danger" : "text-dark")
              }
              onClick={e => this.props.handleSortByChange(e, prop)}
            >
              {prop.replace("_", " ")}
            </a>
          ))}
        </div>
      </div>
    );
  }
}
export default StatusStripeComponent;
