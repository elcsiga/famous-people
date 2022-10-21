<script lang="ts">
  import type { ClearGroupsCommand, GoToGatheringCommand, GoToQuizCommand, ShuffleGroupsCommand } from "../shared/types";
  import Pawn from "../compnents/Pawn.svelte";
  import { gameReport, send, me } from "../game/state";
  import { areGroupsSetUp, numOfValidSheets } from "../shared/utilities";

  function shuffleGroups() {
    send<ShuffleGroupsCommand>({
      command: "shuffleGroups",
    });
  }

  function clearGroups() {
    send<ClearGroupsCommand>({
      command: "clearGroups",
    });
  }

  function startQuiz() {
    send<GoToQuizCommand>({
      command: "goToQuiz",
    });
  }

  function goToGathering() {
    send<GoToGatheringCommand>({
      command: "goToGathering",
    });
  }
</script>

<h1>Csapatok</h1>

<section>
  {#each $gameReport.players as player}
    <Pawn {player} />
  {/each}

  {#if $gameReport.players.every((player) => areGroupsSetUp(player))}
    <button on:click={clearGroups}> Sordsolás törlése </button>
  {:else}
    <button on:click={shuffleGroups}> Csapatok sorsolása </button>
  {/if}
</section>

<section>
  {#if $gameReport.players.every((player) => areGroupsSetUp(player))}
    <p>
      <button on:click={startQuiz}> Kezdődhet a játék! </button>
    </p>
  {/if}

  <p>
    <button on:click={goToGathering}> Vissza a gyülekezőhöz! </button>
  </p>
</section>
