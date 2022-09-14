import React from "react";
import { render, screen } from '@testing-library/react-native';
import Heading from "../components/Heading";

describe("<Heading />", () => {
  test('It must render the title correctly', async () => {
    const props = {
      title: "Some title",
    };

    render(<Heading
      title={props.title}
    />);

    const title = screen.getByText(props.title);

    expect(title).toBeTruthy();
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('It must render the subtitle correctly', async () => {
    const props = {
      subtitle: "Some subtitle",
    };

    render(<Heading
      subtitle={props.subtitle}
    />);

    const subtitle = screen.getByText(props.subtitle);

    expect(subtitle).toBeTruthy();
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
