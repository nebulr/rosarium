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
    const { number } = this.props;
    const alternate = PrayerModel.noBead.indexOf(number) === -1;
    let beadStyle, titleStyle, contentStyle;
    if (alternate) {
      beadStyle = PrayerStyles.bead;
      titleStyle = PrayerStyles.title_white;
      contentStyle = PrayerStyles.content_white;
    } else {
      beadStyle = {};
      titleStyle = PrayerStyles.title_black;
      contentStyle = PrayerStyles.content_black;
    }
    return (
      <View style={beadStyle}>
        <Text style={titleStyle}>{PrayerModel.getPrayerTitle(this.props.number)}</Text>
        <Text style={contentStyle}>{PrayerModel.getPrayerContent(this.props.number)}</Text>
      </View>
    );
  }
}
