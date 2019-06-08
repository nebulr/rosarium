class Rosary {

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
  mystery = 0;

  prayers = [];

  constructor() {
    this.prayers = this.prayers.concat(this.preDecades);
    for(let i = 0; i < this.decades; i++) {
      this.prayers.push(`MYSTERIES_${i}`);
      this.prayers = this.prayers.concat(this.decade);
    }
    this.prayers = this.prayers.concat(this.postDecades);
  }

  startNewRosary() {
    this.position = 0;
  }

  getMystery(dayOfWeek) {
    let day = dayOfWeek || (new Date()).getDay();
    return this.mysteries[this.days[day]];
  }

  getPrayer(newPosition) {
    let index = newPosition || this.position;
  }
}

export default new Rosary();