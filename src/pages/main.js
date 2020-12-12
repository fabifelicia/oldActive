/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { Component } from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class Main extends Component {
  static navigationOptions = {
    title: "Envelhecimento Ativo"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Este aplicativo tem a finalidade de avaliar o tipo de envelhecimento
          da população. Caso tenha interesse de participar da pesquisa, clique
          no botão abaixo.
        </Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            this.props.navigation.navigate("Basic");
          }}
        >
          <Text style={styles.loginButtonText}>Iniciar teste</Text>
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
    fontFamily: "Roboto-Regular",
    color: "rgba(0, 0, 0, 0.5)",
    fontWeight: "bold"
  },

  loginButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#ef5350",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },

  loginButtonText: {
    fontSize: 16,
    color: "#ef5350",
    fontWeight: "bold"
  }
});
