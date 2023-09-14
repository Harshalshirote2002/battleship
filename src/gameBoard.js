import { ship } from "./ship.js";

class boardCell{
  constructor(){
    this.isHit = false;
    this.shipName = null;
    this.isShip = false;
  }
  
  hitCell = () => {
    this.isHit = true;
  };
  makeShipCell = (someShipName)=>{
    if (!this.isShip) {
      this.shipName = `${someShipName}`;
    }
    this.isShip = true;
  };
}

function gameBoard(positions) {
  let board = [];
  for (let i = 1; i <= 10; i++) {
    board[i] = [];
    for (let j = 1; j <= 10; j++) {
      board[i][j] = new boardCell;
    }
  }
  const ships = {
    ship1: ship(1),
    ship2: ship(3),
    ship3: ship(1),
    ship4: ship(5),
    ship5: ship(3),
  };
  for (let p = 0; p < positions.length; p++) {
    let start = positions[p].start;
    let end = positions[p].end;
    if (start[0] === end[0]) {
      for (let i = start[1]; i <= end[1]; i++) {
        board[start[0]][i].makeShipCell(`ship${p + 1}`);
      }
    } else {
      for (let j = start[0]; j <= end[0]; j++) {
        board[j][start[1]].makeShipCell(`ship${p + 1}`);
      }
    }
  }
  const receiveAttack = (position) => {
    if (!board[position[0]][position[1]].isHit) {
      board[position[0]][position[1]].hitCell();
    }
    if (board[position[0]][position[1]].isShip) {
      board[position[0]][position[1]].hitCell();
      ships[board[position[0]][position[1]].shipName].hit();
    }
  };
  const allSunk = () => {
    if (
      ships["ship1"].isSunk() &&
      ships["ship2"].isSunk() &&
      ships["ship3"].isSunk() &&
      ships["ship4"].isSunk() &&
      ships["ship5"].isSunk()
    ) {
      return true;
    } else {
      return false;
    }
  };
  return { ships, allSunk, receiveAttack };
}

module.exports = { gameBoard };
