import { derived } from "svelte/store";
import { lastMove } from "../board";
import { firstPlayer } from "../settings";
import type { PlayerMark } from "$types";

/**
 * Current player move status.
 */
export const currentPlayer = derived([ lastMove, firstPlayer ], ([ $lastMove, $firstPlayer ]) => {
  return $lastMove
    ? -1 * $lastMove.value as PlayerMark
    : $firstPlayer;
});