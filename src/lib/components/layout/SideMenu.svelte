<script lang="ts">
  export let id: string;
  export let area: string | undefined = undefined;
</script>

<aside {id} style="--area: {area}">
  <section>
    <slot />
  </section>
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a
    href="#"
    id="sidebar-close"
    title="Close menu"
    aria-label="Close menu"
    on:click={() => window.history.back()}>
  </a>
</aside>

<style>
  aside {
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
    --duration: 0.6s;
    
    display: grid;
    grid-template-columns: [slot] 4fr [escape] 1fr;
    height: min-content;
    z-index: 10;
  }
  
  a {
    background-color: rgb(0 0 0 / 0.25);
    backdrop-filter: saturate(180%) blur(5px);
  }
  
  @media (max-width: 540px) {
    aside {
      grid-area: var(--area);
      
      position: sticky;
      top: 0;
      min-height: 100vh;
      overflow: hidden auto;
      overscroll-behavior: contain;
      
      visibility: hidden;
      transform: translateX(-110vw);
      will-change: transform;
      transition:
        transform var(--duration) var(--ease-out-expo),
        visibility 0s linear var(--duration);
    }
    
    aside:target {
      visibility: visible;
      transform: translateX(0);
      transition: transform var(--duration) var(--ease-out-expo);
    }
    
    section {
      background-color: hsl(216 28% 7%);
    }
  }
  
  @media (prefers-reduced-motion) {
    aside {
      --duration: 1ms;
    }
  }
</style>