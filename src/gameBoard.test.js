import { gameBoard } from "./gameBoard.js";

test("board-status", () => {
  let positions = [
    { start: [2, 8], end: [2, 8] },
    { start: [1, 1], end: [1, 3] },
    { start: [4, 2], end: [4, 2] },
    { start: [7, 3], end: [7, 7] },
    { start: [10, 8], end: [10, 10] },
  ];
  let board = new gameBoard(positions);
  expect(board.allSunk()).toBe(false);
});

test("ship1-hit", () => {
  let positions = [
    { start: [2, 8], end: [2, 8] },
    { start: [1, 1], end: [1, 3] },
    { start: [4, 2], end: [4, 2] },
    { start: [7, 3], end: [7, 7] },
    { start: [10, 8], end: [10, 10] },
  ];
  let board = new gameBoard(positions);
  board.receiveAttack([2, 8]);
  expect(board.ships["ship1"].isSunk()).toBeTruthy();
});

test("ship5-hit", () => {
  let positions = [
    { start: [2, 8], end: [2, 8] },
    { start: [1, 1], end: [1, 3] },
    { start: [4, 2], end: [4, 2] },
    { start: [7, 3], end: [7, 7] },
    { start: [10, 8], end: [10, 10] },
  ];
  let board = new gameBoard(positions);
  board.receiveAttack([10, 9]);
  board.receiveAttack([10, 10]);
  board.receiveAttack([10, 8]);
  expect(board.ships["ship5"].isSunk()).toBeTruthy();
});

test("ship4-miss", () => {
  let positions = [
    { start: [2, 8], end: [2, 8] },
    { start: [1, 1], end: [1, 3] },
    { start: [4, 2], end: [4, 2] },
    { start: [7, 3], end: [7, 7] },
    { start: [10, 8], end: [10, 10] },
  ];
  let board = new gameBoard(positions);
  board.receiveAttack([7, 5]);
  board.receiveAttack([7, 6]);
  board.receiveAttack([7, 7]);
  expect(board.ships["ship4"].isSunk()).toBeFalsy();
});
