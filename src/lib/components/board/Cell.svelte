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
    <span class="front">
      <Mark {value} />
    </span>
</button>

<style>
  .cell.dark {
    --cell-bg: var(--color-gray-600);
    --cell-bg-front: var(--color-surface-500);
    --cell-mark-color: var(--color-gray-600);
  }
  
  .cell:not(.dark) {
    --cell-bg: hsl(340deg 100% 32%);
    --cell-bg-front: hsl(345deg 100% 47%);
    --cell-mark-color: var(--color-surface-300);
  }
  
  .cell {
    --size: 75px;
    --border-radius: 1em;
    --offset-base: -0.5em;
    
    aspect-ratio: 1;
    cursor: pointer;
    background-color: var(--cell-bg);
    border-radius: var(--border-radius);
    border: none;
    padding: 0;
    width: var(--size);
    height: var(--size);  
    
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  
  .cell:disabled {
    opacity: unset;
    cursor: default;
  }
  
  .front {
    display: block;
    height: var(--size);  
    padding: 0.5em;
    border-radius: var(--border-radius);
    
    background: var(--cell-bg-front);
    color: var(--cell-mark-color);
    
    will-change: transform;
    transform: translateY(var(--offset-base));
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 0.1);
  }
  
  .cell:hover {
    filter: brightness(110%);
  }
  
  .cell:hover .front {
    transform: translateY(calc(4/3 * var(--offset-base)));
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  
  .cell:active .front {
    transform: translateY(calc(var(--offset-base) / 3));
    transition: transform 34ms;
  }
  
  .cell:disabled .front {
    transform: translateY(calc(var(--offset-base) / 3));
  }
  
  .cell:focus {
    outline: 2px dashed var(--cell-mark-color);
    outline-offset: calc(-1 * var(--offset-base));
  }
  
  .cell:focus:not(:focus-visible) {
    outline: none;
  }
</style>