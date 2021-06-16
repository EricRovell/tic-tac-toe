import { checkWinner } from "./check-winner";
import type { TestCase } from "$types";

const cases: TestCase[] = [
  {
    board: [
      [    1,    1,    1 ],
      [ null,   -1, null ],
      [   -1,   -1, null ]
    ],
    row: 0,
    column: 2,
    value: 1,
    consecutive: 3,
    check: {
      win: true,
      coordinates: [ [0, 0], [0, 1], [0, 2] ]
    }
  },
  {
    board: [
      [    1,    1,    1,    1 ],
      [ null,   -1,    1,   -1 ],
      [ null,    1, null,   -1],
      [    1,   -1, null, null ],
    ],
    row: 0,
    column: 2,
    value: 1,
    consecutive: 4,
    check: {
      win: true,
      coordinates: [ [0, 0], [0, 1], [0, 2], [0, 3] ]
    }
  },
  {
    board: [
      [    1, null, null, null, null, null ],
      [ null,    1,   -1, null, null, null ],
      [ null, null,    1, null, null, null ],
      [   -1, null, null,    1, null, null ],
      [   -1, null, null, null, null, null ],
      [ null, null, null, null, null, null ]
    ],
    row: 3,
    column: 3,
    value: 1,
    consecutive: 4,
    check: {
      win: true,
      coordinates: [ [0, 0], [1, 1], [2, 2], [3, 3] ]
    }
  },
  {
    board: [
      [    1, null, null, null, null, null ],
      [ null,    1,   -1, null, null, null ],
      [ null, null,    1, null, null, null ],
      [   -1, null, null, null, null, null ],
      [   -1, null, null, null, null, null ],
      [ null, null, null, null, null, null ]
    ],
    row: 3,
    column: 3,
    value: 1,
    consecutive: 4,
    check: {
      win: false,
      coordinates: []
    }
  },
];

test("Winner cases", () => {
  for (const { check, ...rest} of cases) {
    expect(checkWinner(rest)).toEqual(check);
  }
});