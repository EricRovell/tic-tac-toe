import { derived } from "svelte/store";
import { history } from "./history";

/**
 * Current round number of moves.
 */
export const moveCount = derived(history, $history => $history.length);