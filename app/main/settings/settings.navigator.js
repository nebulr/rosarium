import React, { Component } from 'react';
import { Link } from 'react-router-native';
import translation from 'react-simple-translation';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class SettingsNavigator extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Link to={'/'}>
            <Icon name="arrow-back" />
          </Link>
        </Left>
        <Body>
          <Title>{translation.get('SETTINGS')}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
