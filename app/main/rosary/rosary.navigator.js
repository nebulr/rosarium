import React from 'react';
import Component from 'react-component-state';
import { NativeRouter, Route, Link } from 'react-router-native';
import { 
  Container, Header, Left, Body, Right, Button, 
  Icon, Title, Segment, Content, Text 
} from 'native-base';

import Rosary from '../models/Rosary';

export default class RosaryNavigator extends Component {
  
  state = {
    counter : 0
  };

  constructor(props) {
    super(props);
    this.updateCounter = this.updateCounter.bind(this);
  }

  updateCounter() {
    this.updateState({ counter : this.state.counter + 1 })
  }

  render() {
    return (
      <Header hasSegment>
        <Left>
        </Left>
        <Body>
          <Title></Title>
        </Body>
        <Right>
          <Button transparent onPress={this.updateCounter}>
            <Icon name="ios-settings" />
          </Button>
        </Right>
      </Header>
      <Segment>
        {
          Rosary.mysteries.map((item, index) => {
            if(index === 0) {
              return (
                <Button first>
                  <FormattedMessage id={`${item}_MYSTERIES_TITLE`} />
                </Button>
              )
            } else if (index === Rosary.mysteries.length - 1) {
              return (
                <Button last>
                  <FormattedMessage id={`${item}_MYSTERIES_TITLE`} />
                </Button>
              )
            } else {
              return (
                <Button>
                  <FormattedMessage id={`${item}_MYSTERIES_TITLE`} />
                </Button>
              )
            }
          })
        }
      </Segment>
    );
  }
}