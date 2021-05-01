<script lang="ts">
  import { mark } from "$stores/mark";
  import { fade } from "svelte/transition";
  import { Icon } from "$components/svg";
  import type { BoardMark } from "$types";
  
  export let value: BoardMark = null;
</script>

{#if value}
  <div transition:fade|local>
    <Icon
      path={$mark[value]}
      size="100%"
    />
  </div>
{/if}