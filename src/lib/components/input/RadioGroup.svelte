<script lang="ts" context="module">
  interface RadioItem {
    value: string | number;
    label?: string;
    disabled?: boolean;
  }
</script>

<script lang="ts">
  import RadioButton from "./RadioButton.svelte";
  
  export let items: RadioItem[] = [];
  export let current: string | number | null = null;
  export let name: string;
  export let legend: string;
  
  if (!items || !items.length) {
    console.error("Must have at least one item in the radio group.");
  }
</script>

{#if items && items.length}
  <fieldset>
    <legend>{legend}</legend>
    {#each items as { value, label, disabled } (value)}
      <RadioButton
        bind:group={current}
        {value}
        {disabled}
        {label}
        {name}
      />
    {/each}
  </fieldset>
{/if}

<style>
  fieldset {
    display: flex;
    gap: 0.5em;
    border-radius: var(--radius-2, 5px);
    border: none;
  }
  
  legend {
    margin-bottom: var(--spacing-1);
  }
</style>