import React from "react";
import BrandComponent from "../brand/brand.component";
import SearchFormComponent from "../search-form/search-form.component";

const HeaderComponent = props => (
  <header className="bg-dark text-light pt-2 pb-4">
    <div className="container">
      <BrandComponent />
      <SearchFormComponent
        handleSearchSubmit={props.handleSearchSubmit}
        handleSearchByChange={props.handleSearchByChange}
        searchByProps={props.searchByProps}
        searchBy={props.searchBy}
      />
    </div>
  </header>
);
export default HeaderComponent;
