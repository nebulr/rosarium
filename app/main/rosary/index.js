import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { Image, View } from 'react-native';
import posed, { Transition } from 'react-native-pose';
import { connect } from 'react-redux';

import RosaryNavigator from './rosary.navigator';
import RosaryModel from './rosary.model';
import RosaryStyles from './rosary.styles';
import Prayer from './prayer';
import PrayerModel from './prayer/prayer.model';
import MysteryTitle from './mysteryTitle';
import Mystery from './mystery';

import chainImage from '../../common/assets/images/chain_small.png';
import crossPattee from '../../common/assets/images/cross-pattee.png';

const ScrollView = posed.ScrollView({
  open: { x: 0, scaleY: 1 },
  closed: { x: 100, scaleY: 0 }
});

const Bead = posed.View({
  //draggable: 'y',
  dragBounds: { top: '-100%', bottom: '100%' }
  // enter: {
  //   y: 0,
  //   opacity: 1,
  //   delay: 300,
  //   transition: {
  //     y: { type: 'spring', stiffness: 1000, damping: 15 },
  //     default: { duration: 300 }
  //   }
  // },
  // exit: {
  //   y: 50,
  //   opacity: 0,
  //   transition: { duration: 150 }
  // }
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
    const prayers = RosaryModel.prayers.map((item, index) => {
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
          let chain, cross;
          if (item.position === 1) {
            cross = (
              <Image key={`cross_${index}`} source={crossPattee} style={RosaryStyles.cross} />
            );
          }
          if (
            (index < RosaryModel.prayers.length &&
              PrayerModel.noBead.indexOf(item.position) === -1) ||
            item.position === 1
          ) {
            chain = <Image key={`chain_${index}`} source={chainImage} style={RosaryStyles.chain} />;
          }
          return (
            <View key={`prayer_view_${index}`}>
              <Prayer key={`prayer_${index}`} number={item.position} />
              {cross}
              {chain}
            </View>
          );
      }
    });
    return (
      <Container>
        <RosaryNavigator />
        <Content>
          <ScrollView>{prayers}</ScrollView>
        </Content>
      </Container>
    );
  }
}

export default connect(state => ({
  mystery: state.Mystery.mystery
}))(Rosary);
