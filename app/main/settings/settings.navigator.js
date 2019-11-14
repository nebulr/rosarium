import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-native';
import translation from 'react-simple-translation';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class SettingsNavigator extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Link to={`/rosary/${this.props.mystery}`}>
            <Icon name="arrow-back" style={{ paddingLeft: 20, paddingRight: 20 }} />
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

export default connect(state => ({
  mystery: state.Mystery.mystery
}))(SettingsNavigator);
