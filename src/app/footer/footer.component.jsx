import React, { Component } from "react";
import BrandComponent from "../brand/brand.component";

class FooterComponent extends Component {
  render() {
    return (
      <footer className="bg-dark text-light px-5 py-2">
        <BrandComponent />
      </footer>
    );
  }
}
export default FooterComponent;
