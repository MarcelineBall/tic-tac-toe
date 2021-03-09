class Player {
  constructor (id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }
  saveWinsToStorage() {
    localStorage.setItem('player1 wins', JSON.stringify(player1.wins))
    localStorage.setItem('player2 wins', JSON.stringify(player2.wins))
  }
  retrieveWinsFromStorage() {
    player1.wins = (JSON.parse(localStorage.getItem('player1 wins')) || 0)
    player2.wins = (JSON.parse(localStorage.getItem('player2 wins')) || 0)
  }
}
