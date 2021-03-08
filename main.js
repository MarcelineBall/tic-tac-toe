

var player1 = new Player('one', '🌙')
var player2 = new Player('two', '⭐️')
var game1 = new Game

//SECTION SELECT
var gameBoard = document.getElementById('gameBoard');
var mainText = document.getElementById('mainTextDisplay');
var player1WinDisplay = document.getElementById('player1WinDisplay');
var player2WinDisplay = document.getElementById('plater2WinDisplay');
var topLeftButton = document.getElementById('topLeftButton')
//EVENT LISTENERS
gameBoard.addEventListener('click', function() {
  if (event.target.id === 'topLeftButton') {
    mainPhase(0);
  } else if (event.target.id === 'topCenterButton') {
    mainPhase(1);
  } else if (event.target.id === 'topRightButton') {
    mainPhase(2);
  } else if (event.target.id === 'middleLeftButton') {
    mainPhase(3);
  } else if (event.target.id === 'middleCenterButton') {
    mainPhase(4);
  } else if (event.target.id === 'middleRightButton') {
    mainPhase(5);
  } else if (event.target.id === 'bottomLeftButton') {
    mainPhase(6);
  } else if (event.target.id === 'bottomCenterButton') {
    mainPhase(7);
  } else if (event.target.id === 'bottomRightButton') {
    mainPhase(8);
  }
})

//FUNCTIONS
function logSomething() {
  console.log(event.target.id);
}

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
  console.log(game1.board)
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
