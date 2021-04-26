import { derived } from "svelte/store";
import { board, lastMove } from "../board";
import { checkWinner } from "$utils";
import { consecutive } from "../settings";
import { tie } from "./tie";

/**
 * Current round "win" status.
 */
export const win = derived([ board, lastMove, consecutive ], ([ $board, $lastMove, $consecutive ]) => {
  if (!$lastMove) return false;
  
  return checkWinner({
    board: $board,
    consecutive: $consecutive,
    ...$lastMove
  });
});

/**
 * Current round "winner" player status.
 */
export const winner = derived([ tie, win, lastMove ], ([ $tie, $win, $lastMove ]) => {
  if ($tie) return null;
  
  return $win
    ? $lastMove?.value
    : null;
});