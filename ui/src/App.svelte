<script lang="ts">
  import { gameReport } from "./game/state";
  import Game from "./views/Game.svelte";
  import Gathering from "./views/Gathering.svelte";
  import { Moon } from "svelte-loading-spinners";
</script>

<main>
  <div class="content">
    {#if $gameReport && $gameReport.status === "GATHERING"}
      <Gathering />
    {:else if $gameReport && $gameReport.status === "GAME"}
      <Game />
    {:else}
      <Moon size="60" color="#FF3E00" unit="px" duration="1s" />
    {/if}
  </div>
</main>

<style>

</style>
