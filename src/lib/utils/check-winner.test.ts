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
    win: true
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
    win: true
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
    win: true
  },
];

test("Winner cases", () => {
  for (const { win, ...rest} of cases) {
    expect(checkWinner(rest)).toBe(win);
  }
});