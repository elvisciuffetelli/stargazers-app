import React from "react";
import renderer from "react-test-renderer";

import Search from "../components/Search";

describe("<Grid />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot(); // The length of the tree should be three because we want a 3x3 grid
  });
});
