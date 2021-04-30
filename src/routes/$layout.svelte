<script>
  import { Header, Footer } from "$components/layout";
  
  import "../styles/normalize.css";
  import "../styles/theme-light.css";
  import "../styles/theme-dark.css";
  import "../styles/main.css";
  import "../styles/typography.css";
</script>

<div>
  <Header />
  <section label="content">
    <slot />
  </section>
  <Footer />
</div>

<style>
  div {
    display: grid;
    grid-template: min-content 1fr min-content / 1fr;
    gap: 1em;
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