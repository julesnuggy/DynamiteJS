class RandomLogic {
  constructor() {
    this.myDynamiteCount = 0;
    this.theirDynamiteCount = 0;
  }

  updateDynamiteCounts(mine, theirs) {
    this.myDynamiteCount = mine;
    this.theirDynamiteCount = theirs;
  }

  getMoves() {
    let moves = ['R', 'P', 'S'];
    if (this.iHaveDynamites()) {
      if (this.theyHaveDynamites()) {
        moves = moves.concat(['D', 'W']);
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

  iHaveDynamites() {
    return this.myDynamiteCount < 100 === true;
  }

  theyHaveDynamites() {
    return this.theirDynamiteCount < 100 === true;
  }
}

module.exports = RandomLogic;
