import { derived, writable } from "svelte/store";
import { classic } from "./classic";

/**
 * Stores mark skin option name.
 */
export const markType = writable<string>("classic");

/**
 * Store handles async fetching the mark skin data.
 */
// @ts-expect-error Invalid types from svelte
export const mark = derived(markType, async ($markType, set) => {
  if ($markType === "classic" ?? !globalThis.window) {
    set(classic);
  } else {
    try {
      const response = await fetch(`marks/${$markType}.json`);
      const body = await response.json();
      set(body);
    } catch (error) {
      console.error(error.message);
    }
  }
}, classic);