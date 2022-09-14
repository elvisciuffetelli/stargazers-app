import React from "react";
import { render, screen } from '@testing-library/react-native';
import List from "../components/List";

describe("<List />", () => {
  test('renders a list of users', async () => {
    const props = {
      isLoading: false,
      users: [
        { id: 1, name: "John Doe", avatar_url: "https://www.test1.com" },
        { id: 2, name: "Batman", avatar_url: "https://www.test2.com" },
        { id: 3, name: "Iron Man", avatar_url: "https://www.test3.com" },
      ] };

    render(
      <List users={props.users} isLoading={props.isLoading} />,
    );

    const user1 = screen.getByText('John Doe');
    expect(user1).toBeTruthy();
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
