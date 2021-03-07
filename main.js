var Player = require('./player.js');
var Game = require('./game.js');

var player1 = new Player('one', '🌙')
var player2 = new Player('two', '⭐️')
var game1 = new Game

function winPhase(player) {
  //congradulations message will display
  game1.addWin(player)
  game1.resetBoard()
}

function drawPhase() {
  //draw message will display
  game1.resetBoard()
}

function mainPhase(indexNumber) {
  game1.placePiece(indexNumber)
  if (game1.checkForWinner() && game1.playerTurn === 'one') {
    winPhase(player1)
  } else if (game1.checkForWinner() && game1.playerTurn === 'two') {
    winPhase(player2)
  } else if (game1.checkForDraw()) {
    drawPhase()
  } else {
    game1.nextTurn()
  }
}
