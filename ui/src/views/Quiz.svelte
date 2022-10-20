<script lang="ts">
  import type { GoToResultsCommand } from "../shared/types";
  import { send } from "../game/state";

  function stop() {
    send<GoToResultsCommand>({
      command: "goToResults",
    });
  }
</script>

<h1>Játék!!!</h1>

<section>
  <button on:click={stop}> Eredmények </button>
</section>
