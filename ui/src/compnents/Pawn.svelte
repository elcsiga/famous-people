<script lang="ts">
  import { Card } from "flowbite-svelte";
  import { gameConfig, colors } from "../shared/config";
  import type { Player, PlayerReport } from "../shared/types";
  import { me } from "../game/state";
  import { getGroup, numOfValidSheets } from "../shared/utilities";

  const isReady = (p: Player) => numOfValidSheets(p) === gameConfig.sheets.count;

  export let player: PlayerReport = null;
</script>

<Card href="/cards">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {player.name} {$me === player ? '(Myself)' : ''}
  </h5>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
    #{player.ord} -
    {#if !player.connected}
      not connected
    {:else if isReady(player)}
      ready
    {:else}
      writing...
    {/if}
</Card>
