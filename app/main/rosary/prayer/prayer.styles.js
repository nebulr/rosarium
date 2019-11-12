import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Singleton from 'react-singleton-access';

const standardDiameter = Dimensions.get('window').width - 20;

const defaultStyle = {
  title: {
    fontSize: 26,
    lineHeight: 26,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'castellar',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20
  },
  content: {
    fontSize: 19,
    lineHeight: 19,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'garamond',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20
  },
  bead: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width - 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: Dimensions.get('window').width - 20,
    backgroundColor: Singleton.Constants.Colors.primaryColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const complete = {
  title_white: {
    ...defaultStyle.title,
    color: 'white'
  },
  title_black: {
    ...defaultStyle.title,
    color: 'black'
  },
  content_white: {
    ...defaultStyle.content,
    color: 'white'
  },
  content_black: {
    ...defaultStyle.content,
    color: 'black'
  },
  bead: defaultStyle.bead
};

export default StyleSheet.create(complete);
