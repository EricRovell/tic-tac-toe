<script lang="ts">
  import { history } from "$stores/board";
  import { currentPlayer } from "$stores/status";
  import { dark } from "$stores/theme";
  import type { BoardMark } from "$types";
  
  import Mark from "./Mark.svelte";
  
  export let row: number;
  export let column: number;
  export let value: BoardMark = null;
  export let disabled: boolean = false;
  //export let winner: boolean = false;
  
  function handleMark() {
    history.makeMove({ row, column, value: $currentPlayer});
  }
</script>

<button
  class="cell"
  class:dark={$dark}
  on:click={handleMark}
  disabled={disabled || !!value}>
    <Mark {value} />
</button>

<style>
  .cell.dark {
    --cell-bg: var(--color-surface-400);
    --cell-mark-color: lightcoral;
  }
  
  .cell:not(.dark) {
    --cell-bg: #E15730;
    --cell-mark-color: var(--color-surface-300);
  }
  
  .cell {
    aspect-ratio: 1;
    cursor: pointer;
    background-color: var(--cell-bg);
    color: var(--cell-mark-color);
    width: 75px;
    height: 75px;
    padding: 0.5em;
  }
  
  .cell:disabled {
    opacity: unset;
    outline: 3px solid var(--color-gray-500);
    outline-offset: -3px;
    cursor: default;
  }
</style>