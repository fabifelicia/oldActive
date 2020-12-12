/* eslint-disable comma-dangle */
/* eslint-disable quotes */

import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  FlatList
} from "react-native";

import PropTypes from "prop-types";
import { images } from "../assets";
import { BasicQuest } from "./basicQuest";

const propTypes = {
  item: PropTypes.object
};

class BasicItem extends Component {
  state = {
    isSelected: false
  };

  renderQuest = ({ item }) => <BasicQuest item={item} />;

  onPress = () => {
    this.setState((prevState, prevProps) => ({
      isSelected: !prevState.isSelected
    }));
  };

  renderDetails = data => (
    <ScrollView>
      <FlatList
        data={data}
        renderItem={this.renderQuest}
        keyExtractor={(_, index) => index + ""}
        scrollEnabled={true}
      />
    </ScrollView>
  );

  render() {
    //const { isSelected1 } = this.state1;
    const { isSelected } = this.state;
    const expandImg = <Image source={images.expand} style={styles.image} />;
    const closeImg = <Image source={images.close} style={styles.image} />;

    return (
      <View>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.onPress}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{this.props.item.title}</Text>
              {isSelected ? closeImg : expandImg}
            </View>
          </TouchableWithoutFeedback>
          {isSelected && this.renderDetails(this.props.item.questions)}
        </View>
      </View>
    );
  }
}

BasicItem.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    backgroundColor: "rgba(255, 255, 255, 0.0)"
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },

  title: {
    flex: 1,
    fontSize: 20,
    color: "#ef5350",
    fontWeight: "bold"
  },

  description: {
    flex: 1,
    fontSize: 20,
    color: "gray",
    paddingTop: 10
  },

  image: {
    width: 20,
    height: 20
  }
});

export { BasicItem };
