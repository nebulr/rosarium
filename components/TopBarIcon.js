import React, { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import Colros from '../constants/Colors';

export default class TopBarIcon extends Component {
  render() {
    return (
      <FontAwesome
        name={this.props.name}
        size={26}
        style={}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}