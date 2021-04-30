<script lang="ts">
  import { Board, Message } from "$components/board";
  import { Status } from "$components/status";
  import { inGame } from "$stores/status";
</script>

<main>
  <Status />
  <Board active={$inGame} />
  <Message />
</main>

<style>
	main {
    display: grid;
    grid-template: min-content 1fr auto / 1fr;
    gap: 1.5em;
    width: min(1280px, 100%);
    min-height: 100vh;
    place-items: start center;
	}
  
  @media (max-width: 540px) {
    main {
      padding: 1em;
    }
  }
</style>
