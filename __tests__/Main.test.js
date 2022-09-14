import React from "react";
import { render, screen } from '@testing-library/react-native';

import Main from "../screens/Main";

describe("<Main />", () => {
  test('It must render and match the snapshot', async () => {
    render(<Main />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
