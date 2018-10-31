class RandomBot {
  constructor() {
    this.dynamiteCount = 0;
  }

  makeMove(gamestate) {
    const random = this.getRandomNumber();

    switch (random) {
      case 1:
        return 'R';
        break;
      case 2:
        return 'P';
        break;
      case 3:
        return 'S';
        break;
      case 4:
        return 'W';
        break;
      case 5:
        return 'D';
        break;
    }
  }

  getRandomNumber() {
    const random = Math.floor((Math.random() * 5) + 1);
    if (random === 5 && this.dynamiteCount < 100) {
      this.dynamiteCount++;
      return random;
    } else if (random === 5 && this.dynamiteCount >= 100) {
      return Math.floor((Math.random() * 4) + 1);
    } else {
      return random;
    }
  }
}

module.exports = new RandomBot();
