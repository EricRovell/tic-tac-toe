import { derived, writable } from "svelte/store";
import { size } from "../settings";
import type { UserMove, History } from "$types";

/**
 * Current round game history.
 */
function historyStore() {
  const { subscribe, set, update } = writable<History>([]);
  
  /**
   * Append a player's move to history.
   */
  function makeMove(move: UserMove) {
    update(current => [ move, ...current ]);
  }
  
  /**
   * Reset's the history stack.
   */
  function reset() {
    set([]);
  }
  
  // TODO
  // reset history on board's size change.
  size.subscribe(() => reset());
  
  return {
    subscribe,
    makeMove,
    reset
  };
}

export const history = historyStore();

/**
 * Last move data: position and mark type.
 */
export const lastMove = derived(history, $history => $history[0]);