import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import posed, { Transition } from 'react-native-pose';
import { connect } from 'react-redux';

import RosaryNavigator from './rosary.navigator';
import RosaryModel from './rosary.model';
import Styles from './rosary.styles';
import Prayer from './prayer';
import MysteryTitle from './mysteryTitle';
import Mystery from './mystery';

const ScrollView = posed.ScrollView({
  open: { x: 0, scaleY: 1 },
  closed: { x: 100, scaleY: 0 }
});

class Rosary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  render() {
    RosaryModel.configure(this.props.mystery);
    return (
      <Container>
        <RosaryNavigator />
        <Content>
          <ScrollView>
            <Transition>
              {RosaryModel.prayers.map((item, index) => {
                switch (item.type) {
                  case 'MYSTERY_TITLE':
                    return <MysteryTitle key={`${item.specific}`} specific={item.specific} />;
                  case 'MYSTERIES':
                    return (
                      <Mystery
                        key={`${item.specific}_${item.position}`}
                        specific={item.specific}
                        position={item.position}
                      />
                    );
                  default:
                    return <Prayer key={`prayer_${index}`} number={item.position} />;
                }
              })}
            </Transition>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default connect(state => ({
  mystery: state.Mystery.mystery
}))(Rosary);
