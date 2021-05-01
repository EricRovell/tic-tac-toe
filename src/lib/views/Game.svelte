<script lang="ts">
  import { Toast } from "$components/feedback";
  import { Board } from "$components/board";
  import { Status } from "$components/status";
  import { inGame, tie, winner } from "$stores/status";
  import { startNewRound } from "$stores/action";
  import { Button } from "$components/input";
  
  function gameEnded() {
    if ($tie) return "It's a tie!";
    if ($winner === 1) return "Player X has won!";
    if ($winner === -1) return "Player O has won!";
  }
</script>

<main>
  <Status />
  <Board active={$inGame} />
  {#if !$inGame}
    <Toast style="position: sticky; bottom: 1em;">
      <h2 slot="title">
        {gameEnded()}
      </h2>
      <Button on:click={startNewRound} variant="primary" appearance="fill">
        Next Round
      </Button>
      <Button href="/">
        Back to menu
      </Button>
    </Toast>
  {/if}
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
