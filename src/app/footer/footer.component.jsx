import React, { Component } from "react";
import "./footer.component.css";
import BrandComponent from "../brand/brand.component";

class FooterComponent extends Component {
  render() {
    return (
      <footer className="footer">
        <BrandComponent />
      </footer>
    );
  }
}
export default FooterComponent;
