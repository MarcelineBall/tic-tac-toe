var player1 = new Player('one', '🌙')
var player2 = new Player('two', '⭐️')
var game1 = new Game

//SECTION SELECT
var gameBoard = document.getElementById('gameBoard');
var mainText = document.getElementById('mainTextDisplay');
var player1WinDisplay = document.getElementById('player1WinDisplay');
var player2WinDisplay = document.getElementById('player2WinDisplay');

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
function updateBoardstate() {
  gameBoard.children[0].innerHTML = game1.board[0];
  gameBoard.children[1].innerHTML = game1.board[1];
  gameBoard.children[2].innerHTML = game1.board[2];
  gameBoard.children[3].innerHTML = game1.board[3];
  gameBoard.children[4].innerHTML = game1.board[4];
  gameBoard.children[5].innerHTML = game1.board[5];
  gameBoard.children[6].innerHTML = game1.board[6];
  gameBoard.children[7].innerHTML = game1.board[7];
  gameBoard.children[8].innerHTML = game1.board[8];
}

function updateWinCount() {
  player1WinDisplay.innerText = `${player1.wins} wins`;
  player2WinDisplay.innerText = `${player2.wins} wins`;
}

function updateTurnDisplay() {
  if (game1.playerTurn === 'one') {
    mainText.innerText = `It's ${player1.token}'s turn`;
  } else if (game1.playerTurn === 'two') {
    mainText.innerText = `It's ${player2.token}'s turn`;
  }
}

function winPhase(player) {
  //congradulations message will display
  game1.addWin(player)
  updateWinCount()
  game1.resetBoard();
  updateBoardstate();
  updateTurnDisplay();
}

function drawPhase() {
  //draw message will display
  game1.resetBoard();
  updateBoardstate();
  updateTurnDisplay();
}

function mainPhase(indexNumber) {
  game1.placePiece(indexNumber)
  updateBoardstate();
  if (game1.checkForWinner() && game1.playerTurn === 'one') {
    winPhase(player1);
  } else if (game1.checkForWinner() && game1.playerTurn === 'two') {
    winPhase(player2);
  } else if (game1.checkForDraw()) {
    drawPhase();
  } else {
    game1.nextTurn();
    updateTurnDisplay();
  }
}
