import React from "react";
import ReactDOM from "react-dom";
import SearchFormComponent from "./search-form.component";
import { shallow, mount } from "enzyme";

describe("SearchFormComponent", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <SearchFormComponent searchByProps={["title", "genres"]} />,
      div
    );
    expect(div).toMatchSnapshot();
  });

  it("should handle buttons clicks correctly", () => {
    const searchByProps = ["title", "genres"];
    const handleSearchByChange = jest.fn();
    const props = {
      searchByProps,
      handleSearchByChange
    };
    const renderedComponent = shallow(<SearchFormComponent {...props} />);
    renderedComponent
      .find("button")
      .first()
      .simulate("click");
    expect(handleSearchByChange).toHaveBeenCalledWith("title");
    renderedComponent
      .find("button")
      .last()
      .simulate("click");
    expect(handleSearchByChange).toHaveBeenCalledWith("genres");
  });
});
