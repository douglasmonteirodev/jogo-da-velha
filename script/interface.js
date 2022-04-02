let squares = document.querySelectorAll(".square");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

document.addEventListener("DOMContentLoaded", () => {
  squares.forEach((eventSquare) => {
    eventSquare.addEventListener("click", handleClick);
  });
});

function handleClick(eventSquare) {
  const square = eventSquare.target;
  const position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      alert(
        "O jogo acabou - O vencedor foi o jogador " + Number(playerTime + 1)
      );
      playerTime = playerTime == 0 ? player1.innerHTML++ : player2.innerHTML++; // Altera o placar
      {
      }
    }, 10);
  }
  updateSquares(position);
}

function updateSquares(position) {
  let square = document.getElementById(position.toString());
  const symbol = board[position];
  square.innerHTML = `<div class="${symbol}"></div>`;
}

function reset() {
  squares.forEach((square) => {
    square.innerHTML = "";
  });
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;
}
