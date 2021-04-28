<script lang="ts">
  import { fade } from "svelte/transition";
  import type { BoardMark } from "$types";
  
  export let value: BoardMark = null;
</script>

{#if value}
  <svg transition:fade xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    {#if value === 1}
      <g>
        <path d="M97.56,2.44a8.35,8.35,0,0,0-11.79,0L2.44,85.78A8.33,8.33,0,0,0,14.23,97.56L97.56,14.23A8.33,8.33,0,0,0,97.56,2.44Z" />
        <path d="M97.56,85.78,14.23,2.44A8.34,8.34,0,0,0,2.44,14.23L85.77,97.56A8.33,8.33,0,0,0,97.56,85.78Z" />
      </g>
    {:else}
      <g>
        <path d="M50,0a50,50,0,1,0,50,50A50.05,50.05,0,0,0,50,0Zm0,83.33A33.33,33.33,0,1,1,83.33,50,33.37,33.37,0,0,1,50,83.33Z" />
      </g>
    {/if}
  </svg>
{/if}

<style>
  svg {
    width: 100%;
    height: 100%;
    fill: lightcoral;
  }
</style>