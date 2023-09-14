import gameBoard from "./gameBoard.js";
import updateUI from "./index.js";
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

export const player = gameBoard(playerPositions);

export const cpuPlayer = gameBoard(cpuPositions);

function gameStatusCheck(){
  if (player.allSunk()){
    alert("CPU wins the game!");
    gameWinStatus = 1;
  }else if(cpuPlayer.allSunk()){
    alert("Player wins the game!");
    gameWinStatus = 1;;
  }
}

function randomCoordinateGenerator() {
  let i = Math.floor(Math.random() * 10) + 1;
  let j = Math.floor(Math.random() * 10) + 1;
  return [i, j];
}

function cpuMove(player) {
  let i, j;
  do {
    [i, j] = randomCoordinateGenerator();
  } while (player.board[i][j].isHit);
  player.receiveAttack([i, j]);
  gameStatusCheck();
  return;
}

export function playerMove(cpuPlayer, position_x, position_y) {
  if (cpuPlayer.board[position_x][position_y].isHit) {
    alert("cell is already hit!");
  } else {
    cpuPlayer.receiveAttack([position_x, position_y]);
    gameStatusCheck();
    cpuMove(player);
    updateUI();
  }
}



