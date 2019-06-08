import React from 'react';
import { StyleSheet } from 'react-native';
import Singleton from 'react-singleton-access';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  settingButtonIcon: {
    fontSize: 26,
    lineHeight: 26,
    textAlign: 'center',
    color: Singleton.Constants.Colors.primaryColor
  },
  segment: {
    paddingRight: 20,
    paddingLeft: 20,
    width: '100%',
    backgroundColor: 'white'
  },
  segmentButton: {
    width: '25%',
    height: 36,
    flex: 1,
    flexDirection: 'column',
    borderColor: Singleton.Constants.Colors.primaryColor
  },
  segmentButtonIcon: {
    fontSize: 26,
    lineHeight: 26,
    height: '100%',
    width: '100%',
    textAlign: 'center',
    color: Singleton.Constants.Colors.primaryColor
  },
  segmentButtonText: {
    color: Singleton.Constants.Colors.primaryColor,
    fontSize: 12,
    lineHeight: 5
  },
  active: {
    backgroundColor: Singleton.Constants.Colors.primaryColor,
    color: 'white'
  }
});
