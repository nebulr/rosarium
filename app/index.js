import React from 'react';
import Component from 'react-component-state';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { NativeRouter, Route } from 'react-router-native';

import './common';
import Rosary from './main/rosary';
import Settings from './main/settings';


class App extends Component {
  state = {
    isLoadingComplete: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <NativeRouter>
          <View style={styles.container}>
            { Platform.OS === 'ios' && <StatusBar barStyle="default" /> }
            <Route path="/" component={Rosary} />
            <Route path="/settings" component={Settings} />
          </View>
        </NativeRouter>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        ...FontAwesome5.font,
        ...FontAwesome.font,
        'garamond': require('./common/assets/fonts/garamond.ttf'),
        'castellar': require('./common/assets/fonts/castellar.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Expo.registerRootComponent(App);
