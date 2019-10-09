class Rosary {
  decades = 5;

  preDecades = [0, 1, 2, 3, 3, 3, 4];

  decade = [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5];

  postDecades = [6, 7];

  mysteries = ['JOYOUS', 'LUMINOUS', 'SORROWFUL', 'GLORIOUS'];

  days = [3, 0, 2, 3, 1, 2, 0];

  position = 0;
  mystery = 0;

  prayers = [];

  constructor() {
    this.configure();
  }

  configure(mysterySelected) {
    this.prayers = [];
    const decades = this.decade.map(item => {
      return { type: 'PRAYER', position: item };
    });
    const preDecadesObj = this.preDecades.map(item => {
      return { type: 'PRAYER', position: item };
    });
    const postDecadesObj = this.postDecades.map(item => {
      return { type: 'PRAYER', position: item };
    });
    const selectedMystery = mysterySelected || this.getMystery();
    this.prayers.push({ type: 'MYSTERY_TITLE', specific: selectedMystery });
    this.prayers = this.prayers.concat(preDecadesObj);
    for (let i = 0; i < this.decades; i++) {
      this.prayers.push({ type: `MYSTERIES`, specific: selectedMystery, position: i });
      this.prayers = this.prayers.concat(decades);
    }
    this.prayers = this.prayers.concat(postDecadesObj);
  }

  startNewRosary() {
    this.position = 0;
  }

  getMystery(dayOfWeek) {
    let day = dayOfWeek != null ? dayOfWeek : new Date().getDay();
    return this.mysteries[this.days[day]];
  }

  getPrayer(newPosition) {
    let index = newPosition || this.position;
  }
}

export default new Rosary();
