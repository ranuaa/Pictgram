import React from "react";
import Header from "./app/Components/Header";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import StoryList from "./app/Components/StoryList";

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <StoryList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight
  }
})
export default App