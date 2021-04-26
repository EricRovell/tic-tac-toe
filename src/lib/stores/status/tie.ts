import { derived } from "svelte/store";
import { size } from "../settings";
import { moveCount } from "../board";

/**
 * Current round "tie" status.
 */
export const tie = derived([ size, moveCount ], ([ $size, $moveCount ]) => {
  return $moveCount === $size ** 2
});