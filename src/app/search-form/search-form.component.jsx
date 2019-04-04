import React, { Component } from "react";

const SearchFormComponent = props => (
  <form className="pt-4" onSubmit={props.handleSearchSubmit}>
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
          {props.searchByProps.map(prop => (
            <button
              key={prop}
              className={
                "btn btn-sm ml-2 " +
                (prop === props.searchBy ? "btn-danger" : "btn-secondary")
              }
              type="button"
              onClick={() => props.handleSearchByChange(prop)}
            >
              <span className="text-capitalize">{prop}</span>
            </button>
          ))}
        </div>
        <input className="btn btn-danger" type="submit" value="Search" />
      </div>
    </fieldset>
  </form>
);
export default SearchFormComponent;
