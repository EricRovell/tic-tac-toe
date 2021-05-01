import { derived } from "svelte/store";
import { tie } from "./tie";
import { win } from "./win";

/**
 * Game in progress status.
 */
export const inGame = derived([ tie, win ], ([ $tie, $win ]) => {
  return !($win || $tie);
});