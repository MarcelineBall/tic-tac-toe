var Player = require('./player.js');

var player1 = new Player('one', '🌙')
var player2 = new Player('two', '⭐️')

class Game {
  constructor() {
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.playerTurn = 'one';
  }
  placePiece(indexNumber) {
    if (this.playerTurn === 'one' && this.board[indexNumber] === 0) {
      this.board[indexNumber] = 1;
      this.playerTurn = 'two';
    } else if (this.playerTurn === 'two' && this.board[indexNumber] === 0) {
      this.board[indexNumber] = 2;
      this.playerTurn = 'one';
    }
  }
  checkForWinner() {
    // 0,1,2 0,3,6 0,4,8 3,4,5 6,7,8 1,4,7 2,5,8 2,4,6
    var winningMoves = (
      (this.board[0] > 0 && this.board[0] === this.board[1] && this.board[1] === this.board[2]) ||
      (this.board[0] > 0 && this.board[0] === this.board[3] && this.board[3] === this.board[6]) ||
      (this.board[0] > 0 && this.board[0] === this.board[4] && this.board[4] === this.board[8]) ||
      (this.board[3] > 0 && this.board[3] === this.board[4] && this.board[4] === this.board[5]) ||
      (this.board[6] > 0 && this.board[6] === this.board[7] && this.board[7] === this.board[8]) ||
      (this.board[1] > 0 && this.board[1] === this.board[4] && this.board[4] === this.board[7]) ||
      (this.board[2] > 0 && this.board[2] === this.board[5] && this.board[5] === this.board[8]) ||
      (this.board[2] > 0 && this.board[2] === this.board[4] && this.board[4] === this.board[6]))
    if (winningMoves) {
      return true
    }
  }
  addWin(player) {
      player.wins += 1
  }
}
module.exports = Game
