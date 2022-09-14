import React from "react";
import { render, screen, fireEvent } from '@testing-library/react-native';
import Search from "../components/Search";

describe("<Search />", () => {
  test('It must render the fields correctly', async () => {
    render(
      <Search
        handlePress={jest.fn()}
        onChangeOwner={jest.fn()}
        onChangeRepo={jest.fn()}
      />,
    );
    const ownerField = screen.getByPlaceholderText('Repo owner');
    const repoField = screen.getByPlaceholderText('Repo name');
    expect(ownerField).toBeTruthy();
    expect(repoField).toBeTruthy();
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('If the button SEARCH is clicked, it must call handlePress', async () => {
    const handlePress = jest.fn();
    render(
      <Search
        handlePress={handlePress}
        onChangeOwner={jest.fn()}
        onChangeRepo={jest.fn()}
      />,
    );

    const searchButton = screen.getByText('SEARCH');

    fireEvent.press(searchButton);
    expect(handlePress).toHaveBeenCalledTimes(1);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
