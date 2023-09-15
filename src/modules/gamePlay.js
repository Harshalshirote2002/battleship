import gameBoard from "./gameBoard.js";
import updateUI from "./index.js";
let flag = 0;
export let gameWinStatus = 0;

export function toggleGameWinStatus(){
  gameWinStatus = 0;
  cpuPlayer = gameBoard(cpuPositions);
}

export let player;

export const placePlayerShips = (positions) => {
  player = gameBoard(positions);
};

let cpuPositions = [
  { start: [1, 1], end: [1, 5] },
  { start: [2, 2], end: [2, 5] },
  { start: [7, 10], end: [9, 10] },
  { start: [10, 1], end: [10, 3] },
  { start: [9, 6], end: [9, 7] },
];

export let cpuPlayer = gameBoard(cpuPositions);

function gameStatusCheck() {
  if (player.allSunk()) {
    alert("CPU wins the game!");
    gameWinStatus = 1;
  } else if (cpuPlayer.allSunk()) {
    alert("Player wins the game!");
    gameWinStatus = 1;
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
