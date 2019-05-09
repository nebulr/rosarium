import React from 'react';
import { Content, Text } from 'native-base';

import Component from 'react-component-state';

export default class Beads extends Component {

  render() {
    return (
      <Content padder>
        <Text>{this.state.counter}</Text>
      </Content>
    )
  }
}