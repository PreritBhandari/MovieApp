import React, { Component } from "react";
import { View, ScrollView, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";
import MovieList from "./MovieList";

export default class SearchMovie extends Component {
  state = {
    search: "",
    searchData: [],
  };

  updateSearch = async (search) => {
    this.setState({ search });
    console.log(this.state.search);

    const response = await fetch(
      `http://www.omdbapi.com/?s=${search}&apikey=d12828b9`
    );
    const responseJson = await response.json();
    this.setState({
      searchData: responseJson.Search,
    });
    console.log(this.state.searchData);
  };

  render() {
    const { search, searchData } = this.state;

    return (
      <View style={{ display: "flex" }}>
        {/* <Text style={{ fontSize: 30, color: "white", padding: 15 }}>
          Search
        </Text> */}
        <SearchBar
          placeholder="Search Movie"
          onChangeText={this.updateSearch}
          value={search}
          autoCompleteType="off"
        />

        <View style={{ display: "flex", marginBottom: 130 }}>
          <FlatList
            data={searchData}
            renderItem={({ item }) => <MovieList item={item} />}
            keyExtractor={(item) => item.imdbID}
          />

        </View>
      </View>
    );
  }
}
