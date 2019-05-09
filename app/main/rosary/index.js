import React from 'react';
import Component from 'react-component-state';
import { Container } from 'native-base';

import RosaryNavigator from './rosary.navigator';
import RosaryModel from './rosary.model';

export default class Rosary extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: this.getMystery(),
      index: 0
    };
  }

  render() {
    return (
      <Container>
        <RosaryNavigator />
      </Container>
    );
  }
}
