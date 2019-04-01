import React, { Component } from "react";
import BrandComponent from "../brand/brand.component";
import SearchFormComponent from "../search-form/search-form.component";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="bg-dark text-light px-5 pt-2 pb-4">
        <BrandComponent />
        <SearchFormComponent
          handleSearchSubmit={this.props.handleSearchSubmit}
          handleSearchByChange={this.props.handleSearchByChange}
          searchByProps={this.props.searchByProps}
          searchBy={this.props.searchBy}
        />
      </header>
    );
  }
}
export default HeaderComponent;
