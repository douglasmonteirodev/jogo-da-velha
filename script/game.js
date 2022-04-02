let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ["o", "x"];
let gameOver = false;
let windStades = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleMove(position) {
  if (gameOver) {
    return;
  }

  if (board[position] == "") {
    board[position] = symbols[playerTime];
    gameOver = isWin();

    if (gameOver == false) {
      playerTime = playerTime == 0 ? 1 : 0;
    }
  }

  return gameOver; //
}

function isWin() {
  for (let i = 0; i < windStades.length; i++) {
    let seq = windStades[i];
    let coluna1 = seq[0];
    let coluna2 = seq[1];
    let coluna3 = seq[2];
    if (
      board[coluna1] == board[coluna2] &&
      board[coluna1] == board[coluna3] &&
      board[coluna1] != ""
    ) {
      return true;
    }
  }
  return false;
}
