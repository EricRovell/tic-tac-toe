<script lang="ts">
  import { slide } from "svelte/transition";
      
  export let style: string | undefined = undefined;
</script>

<aside {style} transition:slide>
  <header>
    <slot name="title" />
  </header>
  <section name="message">
    <slot />
  </section>
</aside>

<style>
  aside {
    display: grid;
    gap: 0.5em;
    
    position: sticky;
    bottom: 1em;
    
    padding: 1em;
    background-color: #21262d;
    border-radius: var(--radius-3);
    
    font-size: var(--font-size-1);
  }
  
  header {
    font-size: var(--font-size-2);
    text-align: center;
  }
  
  section {
    display: flex;
    place-items: center;
    place-content: center;
    gap: 1em;
  }
</style>