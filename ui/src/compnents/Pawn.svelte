<script lang="ts">
  import { Avatar } from "flowbite-svelte";
  import { gameConfig, colors } from "../shared/config";
  import type { Player, PlayerReport } from "../shared/types";
  import { me } from "../game/state";
  import { getGroup, numOfValidSheets } from "../shared/utilities";

  const isReady = (p: Player) => numOfValidSheets(p) === gameConfig.sheets.count;

  export let player: PlayerReport = null;
</script>

<div class="flex items-center space-x-4">
  <Avatar dot={player.ord >= 0 && {color:"bg-"+colors[getGroup(player)]+"-500"}}/>
  <div class="text-left space-y-1 font-medium dark:text-white">
      <div>{player.name} </div>
      <div class="text-sm text-gray-500 dark:text-gray-400">
        {$me === player ? '(Myself)' : ''}
        {colors[getGroup(player)]}
        {getGroup(player)}
        #{player.ord} -
        {#if !player.connected}
          not connected
        {:else if isReady(player)}
          ready
        {:else}
          writing...
        {/if}
      </div>
  </div>
</div>
