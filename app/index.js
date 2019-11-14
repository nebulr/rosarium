import { Provider } from 'react-redux';
import React, { Component } from 'react';
import * as Font from 'expo-font';
import { AppLoading, Asset, registerRootComponent } from 'expo';
import { PersistGate } from 'redux-persist/integration/react';
import { store, history, persistor } from './common/redux/store';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

import './common';
import Routes from './routes';

class App extends Component {
  state = {
    isLoadingComplete: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    );
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        //...FontAwesome5.font,
        ...FontAwesome.font,
        garamond: require('./common/assets/fonts/garamond.ttf'),
        castellar: require('./common/assets/fonts/castellar.ttf')
      })
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
    backgroundColor: '#fff'
  }
});

export default registerRootComponent(App);
