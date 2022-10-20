<script lang="ts">
  import { gameConfig, colors } from "../shared/config";
  import type { Player, PlayerReport } from "../shared/types";
  import { me } from "../game/state";
  import { getGroup, numOfValidSheets } from "../shared/utilities";

  const isReady = (p: Player) => numOfValidSheets(p) === gameConfig.sheets.count;

  export let player: PlayerReport = null;
</script>

<div class="player-card"
     style:background-color = "{player.ord >= 0 ? colors[getGroup(player)] : 'white' }">
  <div>{player.name} {$me === player ? '(Myself)' : ''}</div>

  <div>#{player.ord}</div>
  {#if !player.connected}
    not connected
  {:else if isReady(player)}
    ready
  {:else}
    writing...
  {/if}
</div>

<style>
  .player-card {
    color: black;
    border: 1px solid black;
    border-radius: 100px;
    text-align: center;
    padding: 10px;
    margin: 10px;
    display: inline-block;
    width: 200px;
  }
</style>