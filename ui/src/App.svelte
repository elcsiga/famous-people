<script lang="ts">
  import { gameReport } from "./game/state";
  import Gathering from "./views/Gathering.svelte";
  import { Moon } from "svelte-loading-spinners";
  import Grouping from "./views/Grouping.svelte";
  import Quiz from "./views/Quiz.svelte";
  import Results from "./views/Results.svelte";
</script>

<main>
  <div class="content">
    {#if $gameReport && $gameReport.status === "GATHERING"}
      <Gathering />
    {:else if $gameReport && $gameReport.status === "GROUPING"}
      <Grouping />
    {:else if $gameReport && $gameReport.status === "QUIZ"}
      <Quiz />
    {:else if $gameReport && $gameReport.status === "RESULTS"}
      <Results />
    {:else}
      <Moon size="60" color="#FF3E00" unit="px" duration="1s" />
    {/if}
  </div>
</main>

<style>
</style>
