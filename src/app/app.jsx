import React, { Component } from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./header/header.component";
import FooterComponent from "./footer/footer.component";
import StatusStripeComponent from "./status-stripe/status-stripe.component";
import MoviesComponent from "./movies/movies.component";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <HeaderComponent />

        <StatusStripeComponent />

        <MoviesComponent />

        <FooterComponent />
      </div>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById("app"));
