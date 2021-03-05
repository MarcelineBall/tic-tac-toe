var Player = require('./player.js');

var player1 = new Player('one', '🌙')
var player2 = new Player('two', '⭐️')

class Game {
  constructor() {
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.playerTurn = 'one';
  }
  placePiece(indexNumber) {
    if (this.playerTurn === 'one') {
      this.board[indexNumber] = 1;
      this.playerTurn = 'two';
    } else if (this.playerTurn === 'two') {
      this.board[indexNumber] = 2;
      this.playerTurn = 'one';
    }
  }
}
module.exports = Game
