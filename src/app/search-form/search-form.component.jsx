import React, { Component } from "react";
import "./search-form.component.css";

class SearchFormComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="pt-4" onSubmit={this.props.handleSearchSubmit}>
        <legend className="text-uppercase">Find your movie</legend>
        <fieldset>
          <input
            className="form-control mb-2"
            type="search"
            placeholder="Search"
            name="search"
          />
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <span className="text-uppercase">Search by</span>
              <button className="btn btn-sm btn-danger mx-2" type="button">
                Title
              </button>
              <button className="btn btn-sm btn-secondary" type="button">
                Genre
              </button>
            </div>
            <input className="btn btn-danger" type="submit" value="Search" />
          </div>
        </fieldset>
      </form>
    );
  }
}
export default SearchFormComponent;
