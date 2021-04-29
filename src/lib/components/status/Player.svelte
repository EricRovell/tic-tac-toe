<script>
  import { inGame, currentPlayer } from "$stores/status";
  import { Icon } from "$components/svg";
  import { classic } from "$components/board/skins/svg-default";
  
  export let mark = 1;
  
  $: active = $inGame && mark === $currentPlayer;
</script>

<Icon path={classic[mark]} color="primary" glow={active} />