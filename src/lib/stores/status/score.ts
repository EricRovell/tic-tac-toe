import { writable } from "svelte/store";
import { winner } from "./win";
import type { Score } from "$types";

/**
 * Score state.
 */
function state() {
  const { subscribe, set, update } = writable<Score>([ 0, 0 ]);
  
  // subscribing to winner store to update the score.
  winner.subscribe(player => {
    update(([ x, y ]) => [
      player ===  1 ? x + 1 : x,
      player === -1 ? y + 1 : y
    ]);
  });
  
  function reset() {
    set([ 0, 0 ]);
  }
  
  return {
    subscribe,
    reset
  };
}

export const score = state();