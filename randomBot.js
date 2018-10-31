class RandomBot {
  constructor(RandomLogic = require("./RandomLogic.js")) {
    this.myDynamiteCount = 0;
    this.theirDynamiteCount = 0;
    this.randomLogic = new RandomLogic();
  }

  makeMove(gamestate) {
    this.updateDynamiteCounts(gamestate);
    const moves = this.randomLogic.getMoves();
    return this.randomLogic.selectMove(moves);
  }

  updateDynamiteCounts(gamestate) {
    const round = gamestate.rounds.length - 1;
    if (round >= 0) {
      if (gamestate.rounds[round].p1 === 'D') {
        this.myDynamiteCount++;
      }

      if (gamestate.rounds[round].p2 === 'D') {
        this.theirDynamiteCount++;
      }
      this.randomLogic.updateDynamiteCounts(this.myDynamiteCount, this.theirDynamiteCount);
    }
  }
}

module.exports = new RandomBot();
