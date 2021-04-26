import { writable } from "svelte/store";
import type { PlayerMark } from "$types";

/**
 * Board Size.
 * 
 * Value is limited to [ 3, 12 ].
 */
export const size = writable<number>(3);

/**
 * The number of consecutive marks to win.
 * 
 * Value is should be in range [ 3, currend board size ]. 
 */
export const consecutive = writable<number>(3);

/**
 * First player's mark:
 *  - "X" as 1
 *  - "0" as -1
 */
export const firstPlayer = writable<PlayerMark>(1);