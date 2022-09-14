import React from "react";
import { ScrollView } from "react-native";

import Search from "../components/Search";
import Heading from "../components/Heading";
import List from "../components/List";
import useFetchUsers from "../hooks/useFetchUsers";
import styles from "../styles";

export default function Main() {
  const {
    isLoading,
    users,
    fieldError,
    errorMessage,
    handlePress,
    onChangeOwner,
    onChangeRepo,
    owner,
    repo,
  } = useFetchUsers();

  return (
    <ScrollView style={styles.container}>
      <Heading
        title="Stargazers app"
        subtitle="Find out a repository stargazers"
      />
      <Search
        handlePress={handlePress}
        onChangeOwner={onChangeOwner}
        owner={owner}
        onChangeRepo={onChangeRepo}
        repo={repo}
        fieldError={fieldError}
        errorMessage={errorMessage}
      />
      <List
        isLoading={isLoading}
        users={users}
      />
    </ScrollView>
  );
}
