import React, { Component } from 'react';
import posed from 'react-native-pose';
import { FormattedMessage } from 'react-intl';
import Singleton from 'react-singleton-access';

import MysteryTitleStyles from './mysteryTitle.styles';
import translation from 'react-simple-translation';

const View = posed.View({
  open: { y: 500, scaleX: 1 },
  closed: { y: 0, scaleX: 0 }
});

const Text = posed.Text({
  open: { y: 500, scaleX: 1 },
  closed: { y: 400, scaleX: 0 }
});

export default class MysteryTitle extends Component {
  render() {
    return (
      <View>
        <Text style={MysteryTitleStyles.title}>
          {translation.get(`${this.props.specific}_MYSTERIES_TITLE`)}
        </Text>
        <Text style={MysteryTitleStyles.content}>
          {translation.get(`${this.props.specific}_MYSTERIES_CONTENT`)}
        </Text>
      </View>
    );
  }
}
