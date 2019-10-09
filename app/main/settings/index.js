import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Content, ListItem, Button, Text } from 'native-base';
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
        <Content>
          <Button
            onPress={() => this.onNewSelect('en_US')}
            full
            info={englishSelected}
            light={!englishSelected}
          >
            <Text>{translation.get('LANG_EN')}</Text>
          </Button>
          <Button
            onPress={() => this.onNewSelect('es_ES')}
            full
            info={spanishSelected}
            light={!spanishSelected}
          >
            <Text>{translation.get('LANG_ES')}</Text>
          </Button>
          <Button
            onPress={() => this.onNewSelect('la_LA')}
            full
            info={latinSelected}
            light={!latinSelected}
          >
            <Text>{translation.get('LANG_LT')}</Text>
          </Button>
        </Content>
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
