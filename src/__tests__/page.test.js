import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import Search from "../Components/Search";
import renderer from "react-test-renderer";


describe("Search component", () => {

  test('matches snapshot', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Ensure the search componenet renders as expected", () => {
    const { container } = render(<Search />);
    expect(container).toMatchSnapshot();
  });

});
