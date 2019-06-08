import React from 'react';
import Component from 'react-component-state';
import { Container, Content } from 'native-base';
import posed from 'react-native-pose';

import RosaryNavigator from './rosary.navigator';
import RosaryModel from './rosary.model';
import Styles from './rosary.styles';
import Prayer from './prayer';

const ScrollView = posed.ScrollView({
  open: { x: 0, scaleY: 1 },
  closed: { x: 100, scaleY: 0 }
});

export default class Rosary extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: RosaryModel.getMystery(),
      index: 0
    };
  }

  render() {
    return (
      <Container>
        <RosaryNavigator />
        <Content>
          <ScrollView>
          {
            RosaryModel.prayers.map((item, index) => {
              return <Prayer key={`prayer_${index}`} number={item} />
            })
          }
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
