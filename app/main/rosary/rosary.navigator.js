import React, { Component } from 'react';
import { connect } from 'react-redux';
import Merge from 'deepmerge';
import { NativeRouter, Route, Link } from 'react-router-native';
import { Header, Left, Body, Right, Button, Title, Segment, Text } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { View } from 'react-native';

import RosaryModel from './rosary.model';
import RosaryStyles from './rosary.styles';

import actions from '../../common/redux/mystery/actions';

const { changeMystery } = actions;

class RosaryNavigator extends Component {
  state = {
    mystery: RosaryModel.getMystery()
  };

  setMystery = mystery => {
    const { changeMystery } = this.props;
    changeMystery({ mystery });
  };

  render() {
    const { mystery } = this.props;
    return (
      <View>
        <Header hasSegment style={RosaryStyles.container}>
          <Left />
          <Body style={RosaryStyles.container}>
            <Segment style={RosaryStyles.segment}>
              {RosaryModel.mysteries.map((item, index) => {
                let icon,
                  iconName,
                  iconStyle,
                  textStyle,
                  buttonStyle,
                  isActive = false,
                  order = {};
                switch (item) {
                  case 'JOYOUS':
                    iconName = 'grin-tears';
                    break;
                  case 'LUMINOUS':
                    iconName = 'lightbulb';
                    break;
                  case 'SORROWFUL':
                    iconName = 'sad-tear';
                    break;
                  case 'GLORIOUS':
                    iconName = 'sun';
                    break;
                }
                if (mystery === item) {
                  iconStyle = Merge(RosaryStyles.segmentButtonIcon, RosaryStyles.active);
                  textStyle = Merge(RosaryStyles.segmentButtonText, RosaryStyles.active);
                  buttonStyle = Merge(RosaryStyles.segmentButton, RosaryStyles.active);
                  isActive = true;
                } else {
                  iconStyle = RosaryStyles.segmentButtonIcon;
                  textStyle = RosaryStyles.segmentButtonText;
                  buttonStyle = RosaryStyles.segmentButton;
                }

                if (index === 0) {
                  order.first = true;
                } else if (index === RosaryModel.mysteries.length - 1) {
                  order.last = true;
                }

                icon = <FontAwesome5 style={iconStyle} name={iconName} />;
                return (
                  <Button
                    key={`segment_${index}`}
                    onPress={() => this.setMystery(item)}
                    active={isActive}
                    style={buttonStyle}
                    {...order}
                  >
                    {icon}
                  </Button>
                );
              })}
            </Segment>
          </Body>
          <Right>
            <Link to={'/settings'}>
              <FontAwesome5 name="cog" style={RosaryStyles.settingButtonIcon} />
            </Link>
          </Right>
        </Header>
      </View>
    );
  }
}

export default connect(
  state => ({
    mystery: state.Mystery.mystery
  }),
  { changeMystery }
)(RosaryNavigator);
