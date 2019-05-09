class Rosary {
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

  decades = 5;

  preDecades = [
    0, 1, 2, 3, 3, 3, 4, 5
  ];

  decade = [
    2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5
  ];

  postDecades = [
    6, 7
  ];

  mysteries = [
    'JOYOUS',
    'LUMINOUS',
    'SORROWFUL',
    'GLORIOUS'
  ];

  days = [
    0, 2, 3, 3, 1, 2, 0
  ];

  position = 0;
  lang = 'EN';
  languageOptions = [
    'EN', 'ES', 'LA'
  ];

  startNewRosary() {
    this.position = 0;
  }

  getMystery(dayOfWeek) {
    let day = dayOfWeek || (new Date()).getDay();
    return this.mysteries[day];
  }

  getPrayer(newPosition) {
    let index = newPosition || this.position;
  }
}

export default new Rosary();