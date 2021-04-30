<script lang="ts">
  import { board } from "$stores/board";
  import { size } from "$stores/settings";
  import Cell from "./Cell.svelte";
  
  export let active: boolean = true;
  
  $: style = `--board-size: ${$size};`;
</script>

<article class="wrapper">
  <ol {style}>
    {#each $board as row, i}
      {#each row as value, j (`${j}/${i}`)}
        <li>
          <Cell
            {value}
            row={i}
            column={j}
            disabled={!active}
          />
        </li>
      {/each}
    {/each}
  </ol>
</article>

<style>
  .wrapper {
    --scrollbar-bg: #161b22;
    --scrollbar-thumb-bg: #90A4AE;
    
    overflow: auto;
    max-width: 100%;
  }
  
  ol {
    list-style: none;
    
    display: grid;
    grid-template: repeat(var(--board-size), 1fr) / repeat(var(--board-size), 1fr);
    place-content: center;
    place-items: center;
    gap: 0.5em;
    width: fit-content;
  }
  
  li {
    width: fit-content;
  }
  
  /* custom scrollbar */
  .wrapper::-webkit-scrollbar {
    width: 11px;
  }
  
  .wrapper {
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-thumb-bg) var(--scrollbar-bg);
  }
  
  .wrapper::-webkit-scrollbar-track {
    background: var(--scrollbar-bg);
  }
  
  .wrapper::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thumb-bg) ;
    border-radius: 6px;
    border: 3px solid var(--scrollbar-bg);
  }
</style>