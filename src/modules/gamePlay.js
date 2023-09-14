import { gameBoard } from "../modules/gameBoard.js";
let flag = 0;
let gameWinStatus = 0;

let playerPositions = [
  { start: [2, 8], end: [2, 8] },
  { start: [1, 1], end: [1, 3] },
  { start: [4, 2], end: [4, 2] },
  { start: [7, 3], end: [7, 7] },
  { start: [10, 8], end: [10, 10] },
];

let cpuPositions = [
  { start: [2, 8], end: [2, 8] },
  { start: [1, 1], end: [1, 3] },
  { start: [4, 2], end: [4, 2] },
  { start: [7, 3], end: [7, 7] },
  { start: [10, 8], end: [10, 10] },
];

let player = gameBoard(playerPositions);

let cpuPlayer = gameBoard(cpuPositions);

function randomCoordinateGenerator() {
  let i = Math.floor(Math.random() * 10) + 1;
  let j = Math.floor(Math.random() * 10) + 1;
  return [i, j];
}

function cpuMove(player) {
  let [i, j] = randomCoordinateGenerator();
  if (player.board[i][j].isHit) {
    cpuMove(player);
  } else {
    player.receiveAttack([i, j]);
    return;
  }
}

function playerMove(cpuPlayer) {
  //write it
}

while (gameWinStatus === 0) {
  if (flag === 0) {
    playerMove(cpuPlayer);
    flag = 1;
  } else if (flag === 1) {
    cpuMove(player);
    flag = 0;
  }
  if (player.allSunk()) {
    gameWinStatus = 1;
    alert("game won by CPU!");
  } else if (cpuPlayer.allSunk()) {
    gameWinStatus = 1;
    alert("game won by player!");
  }
}
