import React, { Component } from "react";
import ReactDOM from "react-dom";
import BrandComponent from "../brand/brand.component";
import ErrorBoundary from "../error-boundary";

const NotFound = () => (
  <ErrorBoundary>
    <header className="bg-dark text-light pt-2 pb-2">
      <div className="container">
        <BrandComponent />
      </div>
    </header>
    <div className="container p-4">
      <p className="h1">404</p>
      <p className="h2">Not found</p>
    </div>
  </ErrorBoundary>
);

export default NotFound;
