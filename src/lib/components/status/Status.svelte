<script lang="ts">
  import { consecutive } from "$stores/settings";
  
  import Score from "./Score.svelte";
  import Consecutive from "./Consecutive.svelte";
</script>

<header>
  <Score />
  <Consecutive
    bind:value={$consecutive}
  />
</header>

<style>
  header {
    display: grid;
    place-items: center;
    gap: 0.5em;
    
    padding: 0.75em;
    border-bottom: 1px solid rgb(255 255 255 / 0.25);
    width: 100%;
    
    background-color: #0d111708;
    backdrop-filter: saturate(180%) blur(5px);
    
    position: sticky;
    top: 0;
  }
</style>