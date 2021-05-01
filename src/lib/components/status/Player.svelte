<script lang="ts">
  import { inGame, currentPlayer } from "$stores/status";
  import { mark } from "$stores/mark";
  import { Icon } from "$components/svg";
  
  export let playerMark = 1;
  
  $: active = $inGame && playerMark === $currentPlayer;
</script>

<Icon
  path={$mark[playerMark]}
  color="primary"
  glow={active}
/>