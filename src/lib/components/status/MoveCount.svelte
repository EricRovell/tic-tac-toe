<script lang="ts">
  import { moveCount } from "$stores/board";
  import { Icon, iconCount } from "$components/svg";
</script>

<output>
  <Icon path={iconCount} />
  <span>{$moveCount}</span>
</output>

<style>
  output {
    display: flex;
    place-items: center;
    gap: 0.25em;
    
    font-size: var(--font-size-4);
  }
</style>