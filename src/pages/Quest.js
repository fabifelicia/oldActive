import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { CheckBox } from "react-native-elements";
import { RadioButton } from "react-native-paper";

import "react-native-vector-icons";

export default class Quest extends Component {
  state = {
    value: "first",
    checked: false
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Você tem no momento...</Text>
        <CheckBox
          title="Doenças Cardiovasculares (doenças do coração)"
          iconRight
          right
          size={20}
          containerStyle={{
            backgroundColor: "#fff",
            borderColor: "#fff",
            margin: 0
          }}
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
        <CheckBox
          title="Hipertensão (Pressão Alta)"
          iconRight
          right
          size={20}
          containerStyle={{
            backgroundColor: "#fff",
            borderColor: "#fff",
            margin: 0
          }}
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
        <CheckBox
          title="AVE (Derrame)"
          iconRight
          right
          size={20}
          containerStyle={{
            backgroundColor: "#fff",
            borderColor: "#fff",
            margin: 0
          }}
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
        <CheckBox
          title="Diabetes"
          right
          iconRight
          size={20}
          containerStyle={{
            backgroundColor: "#fff",
            borderColor: "#fff",
            margin: 0
          }}
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
        <RadioButton.Group
          onValueChange={value => {
            this.setState({ value });
          }}
          value={this.state.value}
        >
          <Text style={styles.text}>Qual a sua faixa etária?</Text>
          <RadioButton.Item
            style={styles.item}
            value="first"
            label="Até 40 anos"
          />
          <RadioButton.Item
            style={styles.item}
            value="second"
            label="De 41 a 59 anos"
          />
          <RadioButton.Item
            style={styles.item}
            value="third"
            label="De 60 a 69 anos"
          />
          <RadioButton.Item
            style={styles.item}
            value="fourth"
            label="De 70 a 79 anos"
          />
          <RadioButton.Item
            style={styles.item}
            value="fifth"
            label="Acima de 80 anos"
          />
        </RadioButton.Group>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  text: {
    color: "#666"
  },

  item: {}
});
