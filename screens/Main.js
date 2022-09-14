import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator, View, ScrollView } from "react-native";
import { Text, ListItem, Avatar } from "@rneui/themed";
import Search from "../components/Search";
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
      <View style={styles.titleContainer}>
        <Text h1 style={styles.title}>
          Stargazers app
        </Text>
        <Text h3 style={styles.title}>
          Find out a repository stargazers
        </Text>
      </View>
      <Search
        handlePress={handlePress}
        onChangeOwner={onChangeOwner}
        owner={owner}
        onChangeRepo={onChangeRepo}
        repo={repo}
        fieldError={fieldError}
        errorMessage={errorMessage}
      />

      <View style={styles.listContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          !!users?.length &&
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
      <StatusBar />
    </ScrollView>
  );
}
