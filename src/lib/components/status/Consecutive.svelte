<script lang=ts>
  export let value = 3;
  export let limit = 5;
  
  export let scale = 18;
  export let stroke = 2;
  export let offset = 5;
  
  $: radius = (scale - stroke) / 2;
  $: height = scale;
  $: width = (value <= limit) 
    ? 2 * offset + scale * value
    : 2 * offset + scale;
    
  $: style = `--height: ${scale}px; --width: ${width}px; --scale: ${scale}px;`;
</script>

<!--
  @component
  
  Consecutive marks display component.
  Renders the SVG illustration about how much consecutive marks player need to win the game.
  
  Usage:
    ```
      <Consecutive bind:value />
    ```
  
  Props:
  
    | Name   | type   | default | description                                         |
    |--------|--------|---------|-----------------------------------------------------|
    | value  | number | 3       | The consecutive marks value.                        |
    | limit  | number | 5       | The maximum value to render display without number. |
    | scale  | number | 18      | The scaling factor for rendering the element.       |
    | stroke | number | 2       | The stroke-widyh value.                             |
    | offset | number | 5       | The line offset before and after the circle.        |

-->
<section>
  {#if value <= 5}
    <svg {width} {height} viewBox="0 0 {width} {height}" {style}>
      {#each { length: value } as _, index}
        <circle cx={offset + scale / 2 + index * scale} cy={scale / 2} r={radius} stroke-width={stroke} fill="none" />
      {/each}
      <line x1="0" y1={scale / 2} x2={width} y2={scale / 2} stroke-width={stroke} />
    </svg>
  {:else}
    <div class="limited-view" {style}>
      <svg {width} {height} viewBox="0 0 {width} {height}" {style}>
        <circle cx={offset + scale / 2} cy={scale / 2} r={radius} stroke-width={stroke} />
        <line x1="0" y1={scale / 2} x2={width} y2={scale / 2} stroke-width={stroke} />
      </svg>
      <div>&times</div>
      <div>{value}</div>
    </div>
  {/if}
</section>

<style>
  section svg {
    stroke: var(--color-primary);
  }
  
  .limited-view {
    display: flex;
    place-items: center;
    gap: 0.25em;
    font-size: var(--scale);
  }
</style>