import React from "react";
import ReactDOM from "react-dom";
import StatusStripeComponent from "./status-stripe.component";
import { shallow, mount } from "enzyme";

describe("StatusStripeComponent", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <StatusStripeComponent sortByProps={["release_date", "rating"]} />,
      div
    );
    expect(div).toMatchSnapshot();
  });

  it("should not have an active button", () => {
    const wrapper = shallow(
      <StatusStripeComponent sortByProps={["release_date", "rating"]} />
    );
    const activeButton = wrapper.find("a.text-danger");
    expect(activeButton.length).toBe(0);
  });

  it("should have an active button", () => {
    const wrapper = shallow(
      <StatusStripeComponent
        sortByProps={["release_date", "rating"]}
        sortBy="rating"
      />
    );
    const activeButton = wrapper.find("a.text-danger");
    expect(activeButton.length).toBe(1);
  });

  it("should have correct count", () => {
    const wrapper = shallow(
      <StatusStripeComponent
        sortByProps={["release_date", "rating"]}
        count={1}
      />
    );
    const countSpan = wrapper.find("span").first();
    expect(countSpan.text()).toBe("1 movie found");
  });

  it("should handle sortBy link click", () => {
    const sortByProps = ["release_date", "rating"];
    const handleSortByChange = jest.fn();
    const props = {
      sortByProps,
      handleSortByChange
    };
    const renderedComponent = shallow(<StatusStripeComponent {...props} />);
    renderedComponent
      .find("a")
      .first()
      .simulate("click");
    expect(handleSortByChange.mock.calls.length).toEqual(1);
  });
});
