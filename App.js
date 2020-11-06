import { StyleSheet, View } from "react-native";

import React, { Component } from "react";
import { Text, SafeAreaView } from "react-native";
import SearchMovie from "./components/SearchMovie";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SearchMovie />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#323232",
  },
});
