<script lang="ts">
  export let label: string;
  export let min: number | undefined = undefined;
  export let max: number | undefined = undefined;
  export let value: number;
</script>

<label>
  <span>{label}</span>
  <input
    type="number"
    bind:value
    {min}
    {max}
  />
</label>

<style>
  label {
    display: grid;
    gap: 0.35em;
  }
  
  input {
    background-color: var(--color-surface-400);
    border: none;
    color: inherit;
    padding: 0.25em 0.75em;
    border-radius: 5px;
    outline: 1px solid var(--outline-color);
  }
  
  input:focus {
    --outline-color: var(--color-primary);
  }
  
  input:focus:in-range {
    --outline-color: var(--color-success);
  }
  
  input:focus:out-of-range {
    --outline-color: var(--color-danger);
  }
</style>