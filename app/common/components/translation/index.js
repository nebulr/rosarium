import React, { Component } from 'react';
import { Text } from 'react-native';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

class Message extends Component {
  render() {
    const { intl, id, defaultMessage, values, ...props } = this.props;
    return <Text {...props}>{intl.formatMessage({ id, defaultMessage }, values)}</Text>;
  }
}

export default injectIntl(Message);
