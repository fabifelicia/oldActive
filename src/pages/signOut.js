/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { Component } from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class Main extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.score}>Score</Text>
        <Text style={styles.score}>0%</Text>
        <Text style={styles.welcome}>Obrigado pela sua participação</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("SignIn");
          }}
        >
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

    backgroundColor: "#fafafa"
  },

  welcome: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    fontFamily: "Roboto-Regular",
    fontWeight: "bold",
    padding: 20
  },

  score: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,

    fontFamily: "Open Sans",
    color: "#000000",
    fontWeight: "800"
  },

  button: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#ef5350",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },

  buttonText: {
    fontSize: 16,
    color: "#ef5350",
    fontWeight: "bold"
  }
});
