<script lang="ts">
  import type {
    SendSheetsCommand
  } from "../shared/types";
  import { onDestroy } from "svelte";
  import { gameConfig } from "../shared/config";
  import { isSheetValid } from "../shared/utilities";
  import { send, me } from "../game/state";

  let mySheets = $me.sheets;
  while (mySheets.length < gameConfig.sheets.count) {
    mySheets.push('');
  };

  let timer;
  const onChange = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      send<SendSheetsCommand>({
        command: 'sendSheets',
        sheets: mySheets
      });
    }, 750);
  };

  const isValid = (sheet: string): boolean => isSheetValid(sheet);

  onDestroy(() => clearTimeout(timer));
</script>

<p>Irj {gameConfig.sheets.count} híres embert!</p>
{#each mySheets as mySheet, index}
  <div>
    <input bind:value={mySheet} on:keyup={() => onChange()} />
    {#if isValid($me.sheets[index])}
      PIPA
    {/if}
  </div>
{/each}