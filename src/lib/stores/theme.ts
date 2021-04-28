import { writable } from "svelte/store";

/**
 * Theme preference store.
 * Holds boolean value as if the dark a prefered theme.
 */
function themeStore() {
  const dark = globalThis.window && window.matchMedia("(prefers-color-scheme: dark)").matches;

  const { subscribe, update } = writable<boolean>(dark);

  return {
    subscribe,
    switch: () => update(value => !value)
  };
}

export const dark = themeStore();