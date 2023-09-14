import { player, cpuPlayer } from "./gamePlay.js";
import { playerMove } from "./gamePlay.js";

function attackEvent(e) {
  let [position_x, position_y] = e.target.id.split(",");
  position_x = parseInt(position_x);
  position_y = parseInt(position_y);
  playerMove(cpuPlayer, position_x, position_y);
}

export default function updateDisplay() {
  const main = document.createElement("main");
  const playerGrid = document.createElement("div");
  const CPUGrid = document.createElement("div");

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const gridCell = document.createElement("div");
      if (player.board[j][i].isShip && player.board[j][i].isHit) {
        gridCell.classList.add("ship-hit-cell");
      } else if (player.board[j][i].isShip) {
        gridCell.classList.add("ship-cell");
      } else if (player.board[j][i].isHit) {
        gridCell.classList.add("cell-hit");
      } else {
        gridCell.classList.add("cell-player");
      }
      playerGrid.appendChild(gridCell);
    }
  }
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const gridCell = document.createElement("div");
      if (cpuPlayer.board[j][i].isHit && cpuPlayer.board[j][i].isShip) {
        gridCell.classList.add("cpu-ship-hit-cell");
      } else if (cpuPlayer.board[j][i].isHit) {
        gridCell.classList.add("cpu-hit-cell");
      } else {
        gridCell.classList.add("cell-cpu");
      }
      gridCell.id = `${j},${i}`;
      gridCell.addEventListener("click", attackEvent);
      CPUGrid.appendChild(gridCell);
    }
  }
  playerGrid.classList.add("player-grid");
  CPUGrid.classList.add("CPU-grid");
  main.append(playerGrid, CPUGrid);
  return main;
}
