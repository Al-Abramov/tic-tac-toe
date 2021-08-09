const PLAYER_1 = "x";
const PLAYER_2 = "o";

class TicTacToe {
  constructor() {
    this.currentSymbol = PLAYER_1;

    this.winMatrix = [];

    this.matrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  getCurrentPlayerSymbol() {
    return this.currentSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
      if(this.matrix[rowIndex][columnIndex] === null) {
        this.matrix[rowIndex][columnIndex] = this.currentSymbol;
        this.currentSymbol = this.currentSymbol === PLAYER_1 ? PLAYER_2 : PLAYER_1;
      }
  }

  isFinished() {
      if(this.isDraw() || this.getWinner() != null) {
          return true
      }
      return false
  }

  getWinner() {
      let win = this.checkGame();

      if(win != null) {
          return win;
      }
      return null
  }

  checkGame() {
    let diagonalX = []
    let diagonalY = []
    let n = this.matrix.length

    for (let i = 0; i < n; i++) {
      if (
        this.matrix[i].every((el) => el === PLAYER_1) ||
        (this.matrix[0][i] === PLAYER_1 && this.matrix[1][i] === PLAYER_1 && this.matrix[2][i] === PLAYER_1)
      ) {
        return PLAYER_1;
      }
      if (
        this.matrix[i].every((el) => el === PLAYER_2) ||
        this.matrix[0][i] === PLAYER_2 && this.matrix[1][i] === PLAYER_2 && this.matrix[2][i] === PLAYER_2
      ) {
        return PLAYER_2;
      }
      diagonalX.push(this.matrix[i][i])
      diagonalY.push(this.matrix[i][n-i-1])
    }
  
    if(diagonalX.every((el) => el === PLAYER_1) || diagonalY.every((el) => el === PLAYER_1)) {
      return PLAYER_1
    } else if(diagonalX.every((el) => el === PLAYER_2) || diagonalY.every((el) => el === PLAYER_2)) {
      return PLAYER_2
    }
        return null
  }

  noMoreTurns() {
    let noTurnsFlag = true
    this.matrix.forEach(elem => {
        if(elem.some(e => e === null)){
          return noTurnsFlag = false
        } 
    })
    return noTurnsFlag;
  }

  isDraw() {
    if(this.noMoreTurns() && !this.getWinner()) {
        return true
    }
    return false
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
