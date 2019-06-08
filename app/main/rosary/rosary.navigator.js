import React from 'react';
import Merge from 'deepmerge';
import Component from 'react-component-state';
import { NativeRouter, Route, Link } from 'react-router-native';
import Translation from 'react-simple-translation';
import { 
  Header, Left, Body, Right, Button, 
  Title, Segment, Text 
} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { View } from 'react-native';

import RosaryModel from './rosary.model';
import RosaryStyles from './rosary.styles';

export default class RosaryNavigator extends Component {

  state = {
    mystery: RosaryModel.getMystery()
  };

  constructor(props) {
    super(props);
    this.setMystery = this.setMystery.bind(this);
  }

  setMystery(mystery) {
    this.updateState({ mystery });
  }

  render() {
    return (
      <View>
        <Header hasSegment style={RosaryStyles.container}>
          <Left></Left>
          <Body style={RosaryStyles.container}>
            <Segment style={RosaryStyles.segment}>
              {
                RosaryModel.mysteries.map((item, index) => {
                  let icon, iconName, iconStyle, textStyle, buttonStyle, isActive = false, order = {};
                  switch(item) {
                    case 'JOYOUS':
                      iconName = 'grin-tears';
                      break;
                    case 'LUMINOUS':
                      iconName = 'lightbulb';
                      break;
                    case 'SORROWFUL':
                      iconName = 'sad-tear'
                      break;
                    case 'GLORIOUS':
                      iconName = 'sun';
                      break;
                  }
                  if (this.state.mystery === item) {
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

                  icon = <FontAwesome5 style={iconStyle} name={iconName} />
                  return (
                    <Button 
                      key={`segment_${index}`} 
                      onPress={() => this.setMystery(item) } 
                      active={isActive} 
                      style={buttonStyle}
                      {...order}>
                      {icon}
                    </Button>
                  )
                })
              }
            </Segment>
          </Body>
          <Right>
            <Button transparent>
              <FontAwesome5 name="cog" style={RosaryStyles.settingButtonIcon} />
            </Button>
          </Right>
        </Header>
      </View>
    );
  }
}