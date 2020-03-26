/* eslint-disable comma-dangle */
/* eslint-disable quotes */

import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

import logo from "../../images/logo.png";

export default class SignIn extends Component {
  static navigationOptions = {
    header: null
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func
    }).isRequired
  };

  state = {
    email: "",
    local: "",
    error: ""
  };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handleLocalChange = local => {
    this.setState({ local });
  };

  handleCreateAccountPress = () => {
    this.props.navigation.navigate("Main");
  };

  handleSignInPress = async () => {
    if (this.state.email.length === 0) {
      this.setState({ error: "Preencha email para continuar!" }, () => false);
    } else {
      this.props.navigation.navigate("Main");
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled={Platform.OS === "ios"}
        style={styles.container}
      >
        <StatusBar hidden />
        <Image style={styles.logo} source={logo} resizeMode="contain" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={this.state.email}
          placeholderTextColor="#999"
          onChangeText={this.handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Cidade/Estado"
          value={this.state.local}
          placeholderTextColor="#999"
          onChangeText={this.handleLocalChange}
          autoCapitalize="words"
          autoCorrect={false}
        />

        {this.state.error.length !== 0 && (
          <Text style={styles.errorMessage}>{this.state.error}</Text>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSignInPress}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20
  },

  logo: {
    height: 220,
    marginBottom: 30,
    borderRadius: 10
  },
  button: {
    height: 46,
    padding: 20,
    borderRadius: 4,
    backgroundColor: "#df4723",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  },

  input: {
    paddingHorizontal: 15,
    borderColor: "#ddd",
    borderRadius: 4,
    backgroundColor: "#fff",
    alignSelf: "stretch",
    borderWidth: 1,
    marginTop: 15,
    height: 46
  },

  errorMessage: {
    textAlign: "center",
    color: "#ce2029",
    fontSize: 14,
    padding: 5
  }
});
