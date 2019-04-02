import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import App from "./app";
import HeaderComponent from "./header/header.component";
import StatusStripeComponent from "./status-stripe/status-stripe.component";
import MoviesComponent from "./movies/movies.component";
import FooterComponent from "./footer/footer.component";

describe("App", () => {
  let wrapper;
  const movies = [
    {
      id: "1",
      title: "Kill Bill",
      image: "//upload.wikimedia.org/wikipedia/en/2/2c/Kill_Bill_Volume_1.png",
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

  beforeEach(() => {
    wrapper = shallow(<App />);
    wrapper.instance().movies = [...movies];
  });

  it("Should render a HeaderComponent", () => {
    expect(wrapper.find(HeaderComponent).length).toBe(1);
  });

  it("Should render a StatusStripeComponent", () => {
    expect(wrapper.find(StatusStripeComponent).length).toBe(1);
  });

  it("Should render a MoviesComponent", () => {
    expect(wrapper.find(MoviesComponent).length).toBe(1);
  });

  it("Should render a FooterComponent", () => {
    expect(wrapper.find(FooterComponent).length).toBe(1);
  });

  describe("App methods", () => {
    const event = {
      target: {
        elements: {
          search: {
            value: "A"
          }
        }
      },
      preventDefault: () => {}
    };

    it("Should set correct state on Search Submit", () => {
      wrapper.instance().handleSearchSubmit(event);

      expect(wrapper.state("movies").length).toEqual(2);
      expect(wrapper.state("search")).toEqual("a");
    });

    it("Should set correct state on SearchBy Change", () => {
      wrapper.instance().handleSearchSubmit(event);
      wrapper.instance().handleSearchByChange("genre");

      expect(wrapper.state("movies").length).toEqual(5);
      expect(wrapper.state("searchBy")).toEqual("genre");
    });

    it("Should set correct state on SortBy Change", () => {
      wrapper.instance().handleSearchSubmit(event);
      expect(wrapper.state("movies")[0].title).toEqual("Jackie Brown");

      wrapper.instance().handleSortByChange(event, "rating");
      expect(wrapper.state("movies")[0].title).toEqual("Django Unchained");
      expect(wrapper.state("sortBy")).toEqual("rating");
    });
  });
});
