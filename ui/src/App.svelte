<script>
  import { Alert } from "flowbite-svelte";
  import { gameReport } from "./game/state";
  import Gathering from "./views/Gathering.svelte";
  import Grouping from "./views/Grouping.svelte";
  import Quiz from "./views/Quiz.svelte";
  import Results from "./views/Results.svelte";
</script>

<div class="p-8">
  <Alert>
    <span class="font-medium">Info alert!</span> Change a few things up and try submitting
    again.
  </Alert>
</div>

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
      loading...
    {/if}
  </div>
</main>

<style>
</style>
