<script lang="ts">
  import DefaultSkin from "./skins/Default.svelte";
  import type { BoardMark } from "$types";  
  
  export let mark: BoardMark = null;
</script>

<DefaultSkin value={mark} />