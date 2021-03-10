var game1 = new Game

var gameBoard = document.getElementById('gameBoard');
var mainText = document.getElementById('mainTextDisplay');
var player1WinDisplay = document.getElementById('player1WinDisplay');
var player2WinDisplay = document.getElementById('player2WinDisplay');

gameBoard.addEventListener('click', function() {
  determineButtonClicked(event.target.id)
})
window.addEventListener('load', manageLoadingFunctions)

function determineButtonClicked(id) {
  if (id === 'topLeftButton') {
    placePlayerIcon(0);
  } else if (id === 'topCenterButton') {
    placePlayerIcon(1);
  } else if (id === 'topRightButton') {
    placePlayerIcon(2);
  } else if (id === 'middleLeftButton') {
    placePlayerIcon(3);
  } else if (id === 'middleCenterButton') {
    placePlayerIcon(4);
  } else if (id === 'middleRightButton') {
    placePlayerIcon(5);
  } else if (id === 'bottomLeftButton') {
    placePlayerIcon(6);
  } else if (id === 'bottomCenterButton') {
    placePlayerIcon(7);
  } else if (id === 'bottomRightButton') {
    placePlayerIcon(8);
  }
}

function manageLoadingFunctions() {
  pullWins();
  updateBoardstate();
}

function pullWins() {
  player1.retrieveWinsFromStorage();
  player2.retrieveWinsFromStorage();
  updateWinCount();
}

function updateLocalStorage() {
  player1.saveWinsToStorage();
  player2.saveWinsToStorage();
}

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

function displayWinner(player) {
  mainText.innerText = `${player.token} won!`;
}

function displayDrawMessage() {
  mainText.innerText = 'It\'s a draw!'
}

function disableButtons() {
  for (var i = 0; i < gameBoard.children.length; i++) {
    gameBoard.children[i].disabled = true;
  }
}

function enableButtons() {
  for (var i = 0; i < gameBoard.children.length; i++) {
    gameBoard.children[i].disabled = false;
  }
}

function delayBoardReset() {
  disableButtons()
  window.setTimeout(resetGame, 2 * 1000);
}

function runWinningFunctions(player) {
  displayWinner(player);
  game1.addWin(player);
  updateWinCount();
  updateLocalStorage();
  delayBoardReset();
}

function resetGame() {
  game1.resetBoard();
  game1.nextTurn();
  updateBoardstate();
  updateTurnDisplay();
  enableButtons();
}

function runDrawFunctions() {
  displayDrawMessage();
  delayBoardReset();
}

function placePlayerIcon(indexNumber) {
  if (game1.board[indexNumber] === 0) {
    game1.placePiece(indexNumber);
    updateBoardstate();
    checkForEndState();
  }
}

function checkForEndState() {
  if (game1.checkForWinner() && game1.playerTurn === 'one') {
    runWinningFunctions(player1);
  } else if (game1.checkForWinner() && game1.playerTurn === 'two') {
    runWinningFunctions(player2);
  } else if (game1.checkForDraw()) {
    runDrawFunctions();
  } else {
    game1.nextTurn();
    updateTurnDisplay();
  }
}
