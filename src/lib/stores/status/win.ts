import { derived } from "svelte/store";
import { board, lastMove } from "../board";
import { checkWinner } from "$utils";
import { consecutive } from "../settings";
import { tie } from "./tie";

/**
 * Current round "win" status.
 */
 export const winnerCheck = derived([ board, lastMove, consecutive ], ([ $board, $lastMove, $consecutive ]) => {
  if (!$lastMove) {
    return {
      win: false,
      coordinates: []
    };
  }
  
  return checkWinner({
    board: $board,
    consecutive: $consecutive,
    ...$lastMove
  });
});

/**
 * Current round "win" status.
 */
export const win = derived(winnerCheck, ({ win }) => win);

/**
 * Current round "winner" player status.
 */
export const winner = derived([ tie, win, lastMove ], ([ $tie, $win, $lastMove ]) => {
  if ($tie) return null;
  
  return $win
    ? $lastMove?.value
    : null;
});

/**
 * Winner coordinates
 */
export const winnerCoordinates = derived(winnerCheck, ({ coordinates }) => coordinates);