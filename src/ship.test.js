import { ship } from "./ship.js";

test("ship-sink-false", () => {
  expect(ship(5).isSunk()).toBeFalsy();
});

test("ship-hit", () => {
  let ship1 = ship(9);
  for (let i = 1; i <= 8; i++) {
    ship1.hit();
  }
  expect(ship1.isSunk()).toBeFalsy();
});

test("ship-sink-true", () => {
  let ship2 = ship(5);
  for (let i = 1; i <= 5; i++) {
    ship2.hit();
  }
  expect(ship2.isSunk()).toBeTruthy();
});
