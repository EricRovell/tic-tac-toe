<script context="module" lang="ts">
  import type { History } from "$types";
</script>

<script lang="ts">
  export let history: History = [];
  export let limit: number = 7;
</script>

<article>
  <header>History</header>
  {#if history.length}
    <table>
      <thead>
        <th>Move</th>
        <th>User</th>
        <th>Row</th>
        <th>Column</th>
      </thead>
      <tbody>
        {#each history.slice(0, limit) as { row, column, value }, index (history.length - index)}
          <tr>
            <td>{history.length - index}</td>
            <td>{value === 1 ? "x" : "o"}</td>
            <td>{row + 1}</td>
            <td>{column + 1}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    {#if history.length > limit}
      <p class=empty>...</p>
    {/if}
  {:else}
    <p class="empty">No moves has been made yet.</p>
  {/if}
</article>

<style>
  article {
    border: 1px solid rgb(255 255 255 / 0.25);
    border-radius: 7.5px;
    height: min-content;
    min-width: 250px;
  }
  
  header {
    text-align: center;
    font-weight: 700;
    padding: 0.5em 0;
  }
  
  table {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    border-collapse: collapse;
    min-width: 100%;
  }
  
  thead,
  tbody,
  tr {
    display: contents;
  }
  
  th {
    font-weight: 400;
  }
  
  td {
    border-bottom: 1px solid rgb(255 255 255 / 0.25);
    width: 100%;
    display: flex;
    place-content: center;
    padding: 0.25em 1em;
  }
  
  tr:last-child td {
    border: none;
  }
  
  .empty {
    text-align: center;
    padding: 0.5em;
    border-top: 1px solid rgb(255 255 255 / 0.25);
  }
</style>