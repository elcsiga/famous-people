<script lang="ts">
	import { gameReport } from "./game/state";
	import Gathering from "./views/Gathering.svelte";
	import Grouping from "./views/Grouping.svelte";
	import Quiz from "./views/Quiz.svelte";
	import Results from "./views/Results.svelte";
  </script>

  <main>
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
  </main>