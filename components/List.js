import React from "react";
import { ActivityIndicator, View } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";
import PropTypes from "prop-types";
import styles from "../styles";

export default function List({ isLoading, users }) {
  return (
    <View style={styles.listContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        !!users.length &&
      users.map((user) => (
        <ListItem key={user.id} bottomDivider>
          <Avatar source={{ uri: user.avatar_url }} />
          <ListItem.Content>
            <ListItem.Title>{user.name}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))
      )}
    </View>
  );
}

List.defaultProps = {
  isLoading: false,
  users: [],
};

List.propTypes = {
  isLoading: PropTypes.bool,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
};
