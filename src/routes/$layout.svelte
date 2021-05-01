<script>
  import { Header, Footer } from "$components/layout";
  
  import "../styles/normalize.css";
  import "../styles/theme-light.css";
  import "../styles/theme-dark.css";
  import "../styles/main.css";
  import "../styles/typography.css";
</script>

<Header />
<section label="content">
  <slot />
</section>
<Footer />

<style>
  :global(body) {
    display: grid;
    grid-template: min-content 1fr min-content / 1fr;
    min-height: 100vh;
    width: 100%;
  }
  
  section {
    display: grid;
    place-items: center;
    place-self: center;
    width: min(100%, 1280px);
  }
</style>