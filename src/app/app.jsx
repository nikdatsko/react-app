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
        release_date: "2003",
        genre: "Action & Adventure",
        rating: 3,
        director: "Quentin Tarantino"
      },
      {
        id: "2",
        title: "Pulp fiction",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
        release_date: "1994",
        genre: "Oscar-winning movies",
        rating: 5,
        director: "Quentin Tarantino"
      },
      {
        id: "3",
        title: "Jackie Brown",
        image:
          "https://upload.wikimedia.org/wikipedia/en/8/89/Jackie_Brown_%281997%29.png",
        release_date: "1997",
        genre: "Dramas",
        rating: 1,
        director: "Quentin Tarantino"
      },
      {
        id: "4",
        title: "Reservoir dogs",
        image:
          "https://upload.wikimedia.org/wikipedia/en/0/01/Reservoir_Dogs.png",
        release_date: "1992",
        genre: "Independant movies",
        rating: 2,
        director: "Quentin Tarantino"
      },
      {
        id: "5",
        title: "Four rooms",
        image:
          "https://upload.wikimedia.org/wikipedia/en/c/c8/Four_rooms_ver2.jpg",
        release_date: "1995",
        genre: "Comedies",
        rating: 3,
        director: "Quentin Tarantino"
      },
      {
        id: "6",
        title: "Django Unchained",
        image:
          "https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg",
        release_date: "2012",
        genre: "Dramas",
        rating: 4,
        director: "Quentin Tarantino"
      }
    ];
    this.searchByProps = ["title", "genre"];
    this.sortByProps = ["release_date", "rating"];
    this.state = {
      movies: this.movies,
      searchBy: this.searchByProps[0],
      sortBy: null,
      search: ""
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchByChange = this.handleSearchByChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  handleSearchSubmit(event) {
    const search = event.target.elements.search.value.toLowerCase();
    this.setState(state => {
      return {
        search,
        movies: this.movies
          .filter(movie => movie[state.searchBy].toLowerCase().match(search))
          .sort((a, b) => b[state.sortBy] - a[state.sortBy])
      };
    });
    event.preventDefault();
  }

  handleSearchByChange(searchBy) {
    this.setState(state => {
      return {
        searchBy,
        movies: this.movies
          .filter(movie => movie[searchBy].toLowerCase().match(state.search))
          .sort((a, b) => b[state.sortBy] - a[state.sortBy])
      };
    });
  }

  handleSortByChange(event, sortBy) {
    this.setState(state => {
      return {
        sortBy,
        movies: this.movies
          .filter(movie =>
            movie[state.searchBy].toLowerCase().match(state.search)
          )
          .sort((a, b) => b[sortBy] - a[sortBy])
      };
    });
    event.preventDefault();
  }

  render() {
    return (
      <ErrorBoundary>
        <HeaderComponent
          handleSearchSubmit={this.handleSearchSubmit}
          handleSearchByChange={this.handleSearchByChange}
          searchByProps={this.searchByProps}
          searchBy={this.state.searchBy}
        />
        <StatusStripeComponent
          handleSortByChange={this.handleSortByChange}
          count={this.state.movies.length}
          sortByProps={this.sortByProps}
          sortBy={this.state.sortBy}
        />
        <MoviesComponent movies={this.state.movies} />
        <FooterComponent />
      </ErrorBoundary>
    );
  }
}
export default App;
