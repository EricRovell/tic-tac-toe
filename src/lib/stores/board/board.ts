import { writable } from "svelte/store";
import { size } from "../settings";
import { lastMove } from "./history";
import { constructBoard } from "$utils";
import type { Board } from "$types";

function boardStore() {
  const { subscribe, update, set } = writable<Board>([]);
  
  // size changes construct a new board
  size.subscribe(value => {
    set(constructBoard(value))
  });
  
  // last move changes update the state
  lastMove.subscribe(move => {
    if (!move) return;
    
    update(current => {
      const { row, column, value } = move;
      current[row][column] = value;
      return current;
    });
  });
  
  /**
   * Reset's the board state.
   */
  function reset() {
    update(board => constructBoard(board.length));
  }
  
  return {
    subscribe,
    reset,
  };
}

/**
 * Board State as 2D array.
 */
export const board = boardStore();