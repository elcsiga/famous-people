<script lang="ts">
  import GiChessPawn from "svelte-icons/gi/GiChessPawn.svelte";
  import MdSignalWifiOff from "svelte-icons/md/MdSignalWifiOff.svelte";
  import { gameConfig, colors } from "../shared/config";
  import type { PlayerReport } from "../shared/types";
  import { me } from "../game/state";

  const { min, max } = gameConfig.numOfPlayers;
  export let player: PlayerReport = null;

  if (gameConfig.numOfPlayers.max < colors.length) {
    console.error('Not enough player colors defined.')
  }

</script>

<div
  class="pawn"
  style="color: {colors[player.color]}"
  class:me={$me === player}
>
  <GiChessPawn />
  <span>{player.name}</span>

  {#if !player.connected}
    <div class="not-connected">
      <MdSignalWifiOff />
    </div>
  {/if}
</div>

<style>
  .pawn {
    position: relative;
    background: linear-gradient(to top, lightgrey, white, lightgrey);
    width: 5em;
    height: 7em;
    margin: 0.5em;
    border-radius: 0.5em;
    transition: all 0.3s ease-in-out;
    border: 0.2rem solid white;
  }

  .not-connected {
    color: white;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 1em;
    height: 1em;
  }

  span {
    font-size: 1em;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    padding-bottom: 3px;

    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    text-align: center;
  }

  .me {
    border: 0.2rem solid var(--primary-color);
  }
</style>
