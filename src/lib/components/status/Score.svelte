<script>
  import { score } from "$stores/status";
  import Player from "./Player.svelte";
  
  $: ([ x, y ] = $score);
</script>

<section label="player-score">
  <Player mark={1} />
  <output>{x}:{y}</output>
  <Player mark={-1} />
</section>

<style>
  section {
    display: grid;
    place-items: center;
    grid-auto-flow: column;
    gap: 0.25em;
    
    font-size: var(--font-size-6);
  }
  
  section :global(svg) {
    transition: filter 0.15s linear;
    will-change: filter;
  }
  
  output {
    display: flex;
    place-items: center;
    letter-spacing: 0.25em;
    text-indent: 0.25em;
  }
</style>