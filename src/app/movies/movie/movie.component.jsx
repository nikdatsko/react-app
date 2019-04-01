import React, { Component } from "react";

class MovieComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="small">
        <img
          className="w-100 mb-1"
          src={this.props.image}
          alt={this.props.title}
        />
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-uppercase font-weight-bold">
            {this.props.title}
          </span>
          <span className="border border-secondary rounded small px-2">
            {this.props.date}
          </span>
        </div>
        <div className="small text-secondary">{this.props.genre}</div>
      </div>
    );
  }
}
export default MovieComponent;
