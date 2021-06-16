import type { WinnerCheck, WinnerCheckStatus, Coordinate } from "$types";

/**
 * Checks the win condition depending on the last move.
 */
export function checkWinner({ board, row, column, value, consecutive = 3 }: WinnerCheck): WinnerCheckStatus {
  
  const size = board.length;
  
  const coordinates: Record<string, Coordinate[]> = {
    row: [],
    column: [],
    diagonal: [],
    antidiagonal: []
  };
  
  let checkedColumn = 0;
  
  /**
   * Traversing row indexes & checking only parts of the board where the latest move was made.
   */
  for (let i = 0; i < size; i++) {
    // column check
    board[row][i] === value
      ? coordinates.column.push([ row, i ])
      : coordinates.column.length = 0;
    
    // row check
    board[i][column] === value
      ? coordinates.row.push([ i, column ])
      : coordinates.row.length = 0;
      
    // diagonal check (top left -> bottom right)
    checkedColumn = column - row + i;
    if (checkedColumn >= 0 && checkedColumn < size) {
      board[i][checkedColumn] === value
        ? coordinates.diagonal.push([ i, checkedColumn ])
        : coordinates.diagonal.length = 0;
    }
    
    // diagonal check (top left -> bottom right)
    checkedColumn = row + column - i;
    if (checkedColumn >= 0 && checkedColumn < size) {
      board[i][checkedColumn] === value
        ? coordinates.antidiagonal.push([ i, checkedColumn ])
        : coordinates.antidiagonal.length = 0;
    }
    
    for (let markedCoordinates of Object.values(coordinates)) {
      if (markedCoordinates.length === consecutive) {
        return {
          win: true,
          coordinates: markedCoordinates
        };
      }
    }
  }
  
  return {
    win: false,
    coordinates: []
  };
}