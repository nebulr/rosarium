import React, { Component } from 'react';
import posed from 'react-native-pose';
import PrayerModel from './prayer.model';
import PrayerStyles from './prayer.styles';

const View = posed.View({
  open: { y: 500, scaleX: 1 },
  closed: { y: 0, scaleX: 0 }
});

const Text = posed.Text({
  open: { y: 500, scaleX: 1 },
  closed: { y: 400, scaleX: 0 }
});

export default class Prayer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={PrayerStyles.title}>{PrayerModel.getPrayerTitle(this.props.number)}</Text>
        <Text style={PrayerStyles.content}>{PrayerModel.getPrayerContent(this.props.number)}</Text>
      </View>
    );
  }
}
