<script lang="ts">
  import { history, currentPlayer } from "$stores";
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

<button on:click={handleMark} disabled={disabled || !!value}>
  <Mark mark={value} />
</button>

<style>
  button {
    aspect-ratio: 1;
    cursor: pointer;
    background-color: #21262d;
    width: 75px;
    height: 75px;
    padding: 0.5em;
  }
  
  button:disabled {
    opacity: unset;
    border-color: var(--color-danger);
    cursor: default;
  }
</style>