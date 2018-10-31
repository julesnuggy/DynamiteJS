class RandomBot {
  constructor() {
    this.myDynamiteCount = 0;
    this.theirDynamiteCount = 0;
  }

  makeMove(gamestate) {
    this.updateDynamiteCounts(gamestate);
    const moves = this.getMoves();
    return this.selectMove(moves);
  }

  getMoves() {
    let moves = ['R', 'P', 'S'];
    if (this.iHaveDynamites()) {
      if (this.theyHaveDynamites()) {
        moves.push('D');
        moves.push('W');
      } else {
        moves.push('D');
      }
    } else {
      if (this.theyHaveDynamites()) {
        moves.push('W');
      }
    }
    return moves;
  }

  selectMove(moves) {
    const length = moves.length;
    const random = Math.floor((Math.random() * length));
    return moves[random];
  }

  updateDynamiteCounts(gamestate) {
    var round = gamestate.rounds.length - 1;
    if (round >= 0) {
      if (gamestate.rounds[round].p1 === 'D') {
        this.myDynamiteCount++;
      }

      if (gamestate.rounds[round].p2 === 'D') {
        this.theirDynamiteCount++;
      }
    }
  }

  iHaveDynamites() {
    return this.myDynamiteCount < 100 === true;
  }

  theyHaveDynamites() {
    return this.theirDynamiteCount < 100 === true;
  }
}

module.exports = new RandomBot();
