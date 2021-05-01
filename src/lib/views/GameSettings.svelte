<script>
  import { goto } from "$app/navigation";
  import { InputNumber, RadioGroup, Button, Select } from "$components/input";
  import { size, consecutive, firstPlayer } from "$stores/settings";
  import { markType } from "$stores/mark";
  import { startNewGame } from "$stores/action";
  
  const items = [
    { value: 1, label: "×" },
    { value: -1, label: "○" }
  ];
  
  async function begin() {
    startNewGame();
    await goto("/game");
  }
</script>

<form on:submit|preventDefault={begin}>
  <h2>Game Settings</h2>
  <InputNumber
    bind:value={$size}
    label="Board size"
    min={3}
    max={12}
  />
  <InputNumber
    bind:value={$consecutive}
    label="Consecutive marks"
    min={3}
    max={$size}
  />
  <RadioGroup
    legend="First move"
    bind:current={$firstPlayer}
    {items}
    name="first-player"
  />
  <Select
    title="Select a language"
    id="#mark-skin-select"
    label="Mark skin"
    options={[
      { label: "Classic", value: "classic" },
      { label: "Starry Love", value: "starry-love" },
    ]}
    bind:value={$markType}
    hiddenFocus
  />
  <Button type="submit">
    Start Game
  </Button>
</form>

<style>
  form {
    display: grid;
    gap: 0.75em;
    width: clamp(275px, 100%, 400px);
    
    padding: 1em;
    border: 1px solid hsl(var(--gray-h) var(--gray-s-800) var(--gray-l-800) / 0.5);
    border-radius: var(--radius-3, 7.5px);
    height: min-content;
  }
  
  form > :global(button) {
    place-self: center;
  }
  
  h2 {
    text-align: center;
    padding-bottom: 0.5em;
    border-bottom: 1px solid hsl(var(--gray-h) var(--gray-s-800) var(--gray-l-800) / 0.5);
    font-size: var(--font-size-5);
    font-weight: 500;
  }
</style>