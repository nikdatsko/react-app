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
    this.movies = [
      {
        id: "1",
        title: "Kill Bill",
        image:
          "//upload.wikimedia.org/wikipedia/en/2/2c/Kill_Bill_Volume_1.png",
        date: "2003",
        genre: "Action & Adventure",
        director: "Quentin Tarantino"
      },
      {
        id: "2",
        title: "Pulp fiction",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
        date: "1994",
        genre: "Oscar-winning movies",
        director: "Quentin Tarantino"
      },
      {
        id: "3",
        title: "Jackie Brown",
        image:
          "https://upload.wikimedia.org/wikipedia/en/8/89/Jackie_Brown_%281997%29.png",
        date: "1997",
        genre: "Dramas",
        director: "Quentin Tarantino"
      },
      {
        id: "4",
        title: "Reservoir dogs",
        image:
          "https://upload.wikimedia.org/wikipedia/en/0/01/Reservoir_Dogs.png",
        date: "1992",
        genre: "Independant movies",
        director: "Quentin Tarantino"
      },
      {
        id: "5",
        title: "Four rooms",
        image:
          "https://upload.wikimedia.org/wikipedia/en/c/c8/Four_rooms_ver2.jpg",
        date: "1995",
        genre: "Comedies",
        director: "Quentin Tarantino"
      },
      {
        id: "6",
        title: "Django Unchained",
        image:
          "https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg",
        date: "2012",
        genre: "Dramas",
        director: "Quentin Tarantino"
      }
    ];
    this.state = {
      movies: this.movies
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(event) {
    const search = event.target.elements.search.value.toLowerCase();
    this.setState(state => {
      return {
        movies: this.movies.filter(movie => {
          const title = movie.title.toLowerCase();
          return title.match(search);
        })
      };
    });
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
