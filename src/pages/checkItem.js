/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { Component } from "react";

import { View, CheckBox } from "react-native";

export default class checkItem extends Component {
  constructor() {
    super();
    this.state = {
      ckeck: false
    };
  }

  checkBoxTest() {
    this.setState({
      check: !this.state.check
    });
  }

  render() {
    return (
      <View>
        <CheckBox
          value={this.state.ckeck}
          onChange={() => this.checkBoxTest()}
        />
      </View>
    );
  }
}
