import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
} from "react-native";
import { ListItem, Button } from "native-base";
import Modal from "react-native-modal";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,

      detailData: [],
      modalOpened: false,
    };
  }

  detailMovie = async (name) => {
    const response = await fetch(
      `http://www.omdbapi.com/?t=${name}&apikey=d12828b9`
    );
    const responseJson = await response.json();
    this.setState({
      detailData: responseJson,
    });

    this.setState({
      modalOpened: true,
    });
    console.log(this.state.detailData);
  };

  modalClose() {
    this.setState({
      modalOpened: false,
    });
  }

  render() {
    const { item, detailData } = this.state;
    return (
      <View style={styles.container}>
        <Modal
          animationIn="slideInRight"
          isVisible={this.state.modalOpened}
          swipeDirection="right"
          hideModalContentWhileAnimating={true}
          swipeThreshold={70}
          onSwipeMove={() => this.modalClose()}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableWithoutFeedback>
              <View
                style={{
                  backgroundColor: "#323232",

                  height: "110%",
                  width: "110%",
                }}
              >
                <ListItem>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 25,
                      marginTop: 60,
                    }}
                  >
                    {detailData.Title} &nbsp;&nbsp;
                    <Button
                      success
                      style={{
                        height: 40,
                        width: 40,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>
                        {detailData.imdbRating}
                      </Text>
                    </Button>
                    <Text
                      style={{
                        color: "skyblue",
                        fontSize: 13,
                      }}
                    >
                      {"\n"}
                      {"\n"}
                      {detailData.Released}, {detailData.Type}
                    </Text>
                  </Text>
                </ListItem>
                <ScrollView showsVerticalScrollIndicator="false">
                  <ListItem>
                    <Image
                      style={{ width: 150, height: 300 }}
                      source={{ uri: detailData.Poster }}
                    />
                    <View
                      style={{
                        width: "55%",
                        paddingLeft: "5%",
                      }}
                    >
                      <Text
                        style={{
                          color: "skyblue",
                          fontSize: 17,
                          marginBottom: 10,
                        }}
                      >
                        <Text style={styles.textstyle}>Production: </Text>
                        {detailData.Production}
                        {"\n"}
                        {"\n"}
                        <Text style={styles.textstyle}>Rated: </Text>
                        {detailData.Rated}
                        {"\n"}
                        {"\n"}
                        <Text style={styles.textstyle}>Country: </Text>
                        {detailData.Country}
                        {"\n"}
                        {"\n"}
                        <Text style={styles.textstyle}>Director: </Text>
                        {detailData.Director}
                        {"\n"}
                        {"\n"}
                        <Text style={styles.textstyle}>Genre: </Text>
                        {detailData.Genre}
                        {"\n"}
                        {"\n"}
                        <Text style={styles.textstyle}>Run Time: </Text>
                        {detailData.Runtime}
                      </Text>

                      {/* <Button success vertical onPress={() => this.modalClose()}>
                      <Text style={{ padding: 10 }}>Close </Text>
                    </Button> */}
                    </View>
                  </ListItem>
                  <ListItem>
                    <Text style={{ color: "skyblue" }}>
                      {"\n"}
                      <Text style={styles.textstyle}>Language: </Text>
                      {detailData.Language}
                      {"\n"}
                      <Text style={styles.textstyle}>Director: </Text>
                      {detailData.Director}
                      {"\n"}
                      <Text style={styles.textstyle}>Imdb: </Text>

                      <Text style={{ color: "skyblue" }}>
                        {detailData.imdbRating}
                      </Text>
                      {"\n"}
                      <Text style={styles.textstyle}>Imdb Votes: </Text>

                      <Text style={{ color: "skyblue" }}>
                        {detailData.imdbVotes}
                      </Text>
                      {"\n"}
                      <Text style={styles.textstyle}>Writer: </Text>

                      <Text style={{ color: "skyblue" }}>
                        {detailData.Writer}
                      </Text>
                      {"\n"}
                      <Text style={styles.textstyle}>Metascore: </Text>

                      <Text style={{ color: "skyblue" }}>
                        {detailData.Metascore}
                      </Text>
                      {"\n"}
                      <Text style={styles.textstyle}>DVD: </Text>

                      <Text style={{ color: "skyblue" }}>{detailData.DVD}</Text>
                      {"\n"}
                      <Text style={styles.textstyle}>Actors: </Text>

                      <Text style={{ color: "skyblue" }}>
                        {detailData.Actors}
                      </Text>
                      {"\n"}
                      <Text style={styles.textstyle}>Awards: </Text>

                      <Text style={{ color: "skyblue" }}>
                        {detailData.Awards}
                      </Text>
                      {"\n"}
                      <Text style={styles.textstyle}>Box Office: </Text>

                      <Text style={{ color: "skyblue" }}>
                        {detailData.BoxOffice}
                      </Text>
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text style={{ color: "skyblue" }}>
                      {"\n"}
                      <Text style={styles.textstyle}>Plot: </Text>
                      {"\n"}

                      <Text>{detailData.Plot}</Text>
                    </Text>
                  </ListItem>
                  <Text>
                    {"\n"}
                    {"\n"}
                  </Text>
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
        <ListItem>
          <Image
            style={{ width: 150, height: 300 }}
            source={{ uri: item.Poster }}
          />
          <View
            style={{ width: "55%", paddingLeft: "5%", marginBottom: "10%" }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
              }}
            >
              {item.Title}
            </Text>
            <Text
              style={{
                color: "skyblue",
                fontSize: 13,
                marginBottom: 70,
              }}
            >
              {"\n"}
              {item.Type}, {item.Year}
            </Text>

            <Button
              success
              vertical
              onPress={() => this.detailMovie(item.Title)}
            >
              <Text style={{ padding: 10 }}>See Details</Text>
            </Button>
          </View>
        </ListItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textstyle: { fontWeight: "500", fontSize: 20 },
});
