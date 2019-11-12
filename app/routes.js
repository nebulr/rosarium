import { connect } from 'react-redux';
import React, { Component } from 'react';
import AppLocale from './common/language';
import { IntlProvider } from 'react-intl';
import { NativeRouter, Route, Redirect, Switch } from 'react-router-native';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

import Rosary from './main/rosary';
import Settings from './main/settings';
// import config, {
//   getCurrentLanguage,
// } from './containers/LanguageSwitcher/config';
// const currentAppLocale = AppLocale[getCurrentLanguage(config.defaultLanguage || 'english').locale];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

class Routes extends Component {
  render() {
    const { mystery } = this.props;
    return (
      <NativeRouter>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Switch>
            <Route path="/rosary/:mystery" component={Rosary} />
            <Route path="/settings" component={Settings} />
            <Redirect to={`/rosary/${mystery}`} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

export default connect(state => ({
  mystery: state.Mystery.mystery
}))(Routes);
