import React, { Component } from 'react';
import posed from 'react-native-pose';
import { FormattedMessage } from 'react-intl';
import Singleton from 'react-singleton-access';

import MysteryStyles from './mystery.styles';

import translation from 'react-simple-translation';

const View = posed.View({
  open: { y: 500, scaleX: 1 },
  closed: { y: 0, scaleX: 0 }
});

const Text = posed.Text({
  open: { y: 500, scaleX: 1 },
  closed: { y: 400, scaleX: 0 }
});

export default class Mystery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={MysteryStyles.title}>
          {translation.get(`${this.props.specific}_MYSTERIES_${this.props.position}`)}
        </Text>
      </View>
    );
  }
}
