import React, { Component } from "react";
import "./header.component.css";
import BrandComponent from "../brand/brand.component";

class HeaderComponent extends Component {
  render() {
    return (
      <header className="header">
        <BrandComponent />

        <form>
          <legend>Find your movie</legend>
          <fieldset>
            <input type="search" placeholder="Search" />
            <div>
              <span>Search by</span>
              <button type="button">Title</button>
              <button type="button">Genre</button>
            </div>
            <input type="submit" value="Search" />
          </fieldset>
        </form>
      </header>
    );
  }
}
export default HeaderComponent;
