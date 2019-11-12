import React from 'react';
import { FormattedMessage } from 'react-intl';
import translations from 'react-simple-translation';

class Prayer {
  prayers = [
    'SIGN_OF_THE_CROSS',
    'APOSTLES_CREED',
    'THE_LORDS_PRAYER',
    'HAIL_MARY',
    'GLORY_BE',
    'FATIMA_PRAYER',
    'HAIL_HOLY_QUEEN',
    'LITANY_OF_LORETO'
  ];

  noBead = [0, 1, 4, 5, 6, 7];

  getPrayerTitle(number) {
    return translations.get(this.prayers[number] + '_TITLE');
  }

  getPrayerContent(number) {
    return translations.get(this.prayers[number] + '_CONTENT');
  }
}

export default new Prayer();
