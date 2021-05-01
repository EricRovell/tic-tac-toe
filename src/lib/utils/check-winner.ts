import type { WinnerCheck } from "$types";

/**
 * Checks the win condition depending on the last move.
 */
export function checkWinner({ board, row, column, value, consecutive = 3 }: WinnerCheck): boolean {
  
  const size = board.length;
  
  const scores = {
    row: 0,
    column: 0,
    diagonal: 0,
    antidiagonal: 0
  };
  
  let checkedColumn = 0;
  
  /**
   * Traversing row indexes & checking only parts of the board where the latest move was made.
   */
  for (let i = 0; i < size; i++) {
    // row check
    scores.column += board[row][i] === value 
      ? 1
      : -1 * scores.column;

    // column check
    scores.row += board[i][column] === value
      ? 1
      : -1 * scores.row;

    // diagonal check (top left -> bottom right)
    checkedColumn = column - row + i;
    if (checkedColumn >= 0 && checkedColumn < size) {
      scores.diagonal += board[i][checkedColumn] === value
        ? 1
        : -1 * scores.diagonal;
    }

    // anti-diagonal check (top right -> bottom left)
    checkedColumn = row + column - i;
    if (checkedColumn >= 0 && checkedColumn < size) {
      scores.antidiagonal += board[i][checkedColumn] === value
        ? 1
        : -1 * scores.antidiagonal;
    }
    
    // score check
    if (Object.values(scores).some(score => score === consecutive)) {
      return true;
    }
  }
  
  return false;
}