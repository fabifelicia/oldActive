import React, { Component } from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Vamos testar como você está envelhecendo?
        </Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            this.props.navigation.navigate("Quest");
          }}
        >
          <Text style={styles.loginButtonText}>Iniciar teste</Text>
        </TouchableOpacity>

        <Text style={styles.score}>Score</Text>
        <Text style={styles.score}>0%</Text>
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
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    padding: 30
  },

  score: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: "rgba(0, 0, 0, 0.5)",
    fontWeight: "bold"
  },

  loginButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#DA552F",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },

  loginButtonText: {
    fontSize: 16,
    color: "#DA552F",
    fontWeight: "bold"
  }
});
