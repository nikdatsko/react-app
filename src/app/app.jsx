import React, { Component } from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./header/header.component";
import FooterComponent from "./footer/footer.component";
import StatusStripeComponent from "./status-stripe/status-stripe.component";
import MoviesComponent from "./movies/movies.component";
import ErrorBoundary from "./error-boundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "Kill Bill",
          bg: "warning"
        },
        {
          title: "Pulp fiction",
          bg: "info"
        },
        {
          title: "Jackie Brown",
          bg: "danger"
        },
        {
          title: "Reservoir dogs",
          bg: "success"
        },
        {
          title: "Four rooms",
          bg: "primary"
        },
        {
          title: "Django Unchained",
          bg: "dark"
        }
      ]
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(event) {
    console.log(event.target.elements.search.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <ErrorBoundary>
          <HeaderComponent handleSearchSubmit={this.handleSearchSubmit} />
          <StatusStripeComponent count={this.state.movies.length} />
          <MoviesComponent movies={this.state.movies} />
          <FooterComponent />
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById("app"));
