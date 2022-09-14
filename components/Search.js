import React from "react";
import { View } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import PropTypes from "prop-types";
import styles from "../styles";

export default function Search({
  handlePress,
  onChangeOwner,
  owner,
  onChangeRepo,
  repo,
  fieldError,
  errorMessage,
}) {
  return (
    <View style={styles.inputContainer}>
      <Input
        style={styles.input}
        onChangeText={onChangeOwner}
        value={owner}
        placeholder="Repo owner"
        errorStyle={{ color: "firebrick" }}
        errorMessage={fieldError}
      />
      <Input
        style={styles.input}
        onChangeText={onChangeRepo}
        value={repo}
        placeholder="Repo name"
        errorStyle={{ color: "firebrick" }}
        errorMessage={fieldError}
      />
      {errorMessage && <Text style={styles.errorMessage} h6>{errorMessage}</Text>}
      <Button
        title="SEARCH"
        size="md"
        onPress={handlePress}
        buttonStyle={styles.button}
      />
    </View>
  );
}

Search.defaultProps = {
  owner: "",
  repo: "",
  fieldError: "",
  errorMessage: "",
};

Search.propTypes = {
  handlePress: PropTypes.func.isRequired,
  onChangeOwner: PropTypes.func.isRequired,
  onChangeRepo: PropTypes.func.isRequired,
  owner: PropTypes.string,
  repo: PropTypes.string,
  fieldError: PropTypes.string,
  errorMessage: PropTypes.string,
};
