<article>
  <header>
    <h1>Changelog</h1>
  </header>
  <section>
    <h2>Version 0.1</h2>
    <ol>
      <li>First public release</li>
    </ol>
  </section>
</article>

<style>
  article {
    display: grid;
    gap: 0.5em;
    
    padding: 1.5em;
    width: min(80ch, 100%);
    
    border: 1px solid rgb(255 255 255 / 0.25);
    border-radius: var(--radius-2);
  }
  
  header {
    font-size: var(--font-size-5);
  }
  
  section h2 {
    font-size: var(--font-size-4);
  }
  
  section {
    display: grid;
    gap: 0.5em;
  }
  
  ol {
    list-style: circle;
    list-style-position: inside;
  }
</style>