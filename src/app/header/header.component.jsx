import React, { Component } from "react";
import "./header.component.css";
import BrandComponent from "../brand/brand.component";
import SearchFormComponent from "../search-form/search-form.component";

class HeaderComponent extends Component {
  render() {
    return (
      <header className="bg-dark text-light px-5 pt-2 pb-4">
        <BrandComponent />
        <SearchFormComponent />
      </header>
    );
  }
}
export default HeaderComponent;
