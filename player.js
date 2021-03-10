class Player {
  constructor (id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    if (this.id === 'one') {
      localStorage.setItem('player1 wins', JSON.stringify(this.wins))
    } else if (this.id === 'two') {
      localStorage.setItem('player2 wins', JSON.stringify(player2.wins))
    }
  }

  retrieveWinsFromStorage() {
    if (this.id === 'one') {
      player1.wins = (JSON.parse(localStorage.getItem('player1 wins')) || 0)
    } else if (this.id === 'two') {
      player2.wins = (JSON.parse(localStorage.getItem('player2 wins')) || 0)
    }
  }
}
