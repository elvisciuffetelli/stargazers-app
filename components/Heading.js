import React from "react";
import { View } from "react-native";
import { Text } from "@rneui/themed";
import PropTypes from "prop-types";
import styles from "../styles";

export default function Heading({ title, subtitle }) {
  return (
    <View style={styles.titleContainer}>
      <Text h1 style={styles.title}>
        {title}
      </Text>
      <Text h3 style={styles.title}>
        {subtitle}
      </Text>
    </View>
  );
}

Heading.defaultProps = {
  title: "",
  subtitle: "",
};

Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
