/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  ToastAndroid
} from "react-native";

import PropTypes from "prop-types";

import RadioForm from "react-native-simple-radio-button";

const propTypes = {
  item: PropTypes.object
};

var soma = 0;

onPress = () => {
  soma = soma + value;
  ToastAndroid.show(soma.toString(), ToastAndroid.SHORT);
};

Somatorio = value => (
  <View>
    <Text>{soma + value}</Text>
  </View>
);

class BasicQuest extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View>
          <Text style={styles.title}>{this.props.item.title}</Text>
          <RadioForm
            radio_props={this.props.item.alternatives}
            initial={-1}
            buttonColor={"#ef5350"}
            buttonSize={10}
            labelColor={"#ef5350"}
            labelStyle={{ fontSize: 16 }}
            onPress={value => {
              ToastAndroid.show(value.toString(), ToastAndroid.SHORT);
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

BasicQuest.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    backgroundColor: "#fafafa"
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },

  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold"
  }
});

export { BasicQuest };
