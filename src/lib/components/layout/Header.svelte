<script>
  import Logo from "../Logo.svelte";
  import { SwitcherTheme } from "$components/input";
</script>

<header>
  <div class="wrapper">
    <section label="logo">
      <Logo />
    </section>
    <section label="controls">
      <SwitcherTheme size="35px" />
    </section>
  </div>
</header>

<style>
  header {
    display: grid;
    place-items: center;
    padding: 0.25em 1em;
    width: 100%;
    background-color: #161b22;
  }
  
  .wrapper {
    display: grid;
    grid: 45px / min-content 1fr 45px;
    place-items: center;
    width: min(1280px, 100%);
  }
  
  section {
    display: flex;
    place-items: center;
    height: 100%;
  }
  
  section[label="controls"] {
    grid-column: 3;
  }
</style>