import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import RosaryScreen from '../screens/RosaryScreen';
import SettingsScreen from '../screens/SettingsScreen';

const RosaryStack = createStackNavigator({
  Home: RosaryScreen
});

RosaryStack.navigationOptions = {
  tabBarLabel: 'Rosarium',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={`flower-tulip${focused ? '' : '-outline'}`} />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={`settings${focused ? '' : '-outline'}`} />
  )
};

export default createBottomTabNavigator({
  RosaryStack,
  SettingsStack
});
