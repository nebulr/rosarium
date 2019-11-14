import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  ListItem,
  Button,
  Text,
  Body,
  Title,
  Left,
  Right
} from 'native-base';
import { ScrollView } from 'react-native';
import SettingsNavigator from './settings.navigator';

import actions from '../../common/redux/language/actions';
import translation from 'react-simple-translation';

const { changeLanguage } = actions;

class Settings extends Component {
  onNewSelect = locale => {
    this.props.changeLanguage({ locale });
  };
  render() {
    const englishSelected = this.props.language === 'en_US';
    const spanishSelected = this.props.language === 'es_ES';
    const latinSelected = this.props.language === 'la_LA';
    return (
      <Container>
        <SettingsNavigator />
        <ScrollView>
          <Content>
            <Button
              onPress={() => this.onNewSelect('en_US')}
              full
              large
              dark={englishSelected}
              light={!englishSelected}
            >
              <Text>{translation.get('LANG_EN')}</Text>
            </Button>
            <Button
              onPress={() => this.onNewSelect('es_ES')}
              full
              large
              dark={spanishSelected}
              light={!spanishSelected}
            >
              <Text>{translation.get('LANG_ES')}</Text>
            </Button>
            <Button
              onPress={() => this.onNewSelect('la_LA')}
              full
              large
              dark={latinSelected}
              light={!latinSelected}
            >
              <Text>{translation.get('LANG_LT')}</Text>
            </Button>
            <Text />
            <Header>
              <Left />
              <Body>
                <Title>{translation.get('ABOUT')}</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <Text style={{ paddingTop: 20, textAlign: 'center' }}>
                {translation.get('ABOUT_CONTENT')}
              </Text>
            </Content>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

export default connect(
  state => ({
    language: state.Language.locale
  }),
  { changeLanguage }
)(Settings);
