import translation from 'react-simple-translation';

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

  getPrayerTitle(number) {
    return translation.get(this.prayers[number] + '_TITLE');
  }

  getPrayerContent(number) {
    return translation.get(this.prayers[number] + '_CONTENT');
  }
}

export default new Prayer();