var Player = require('./player.js');
var Game = require('./game.js');

var game1 = new Game
game1.placePiece(3)
game1.placePiece(4)
game1.placePiece(0)
game1.placePiece(5)
game1.placePiece(6)
console.log(game1.board)
game1.checkForWinner()
