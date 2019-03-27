import React, { Component } from "react";

class MovieComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={`bg-${this.props.bg} p-5`} />
        <div>{this.props.title}</div>
      </div>
    );
  }
}
export default MovieComponent;
