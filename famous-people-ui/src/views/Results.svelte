<script lang="ts">
  import type { GoToGatheringCommand } from "../shared/types";
  import { send } from "../game/state";

  function goToGathering() {
    send<GoToGatheringCommand>({
      command: "goToGathering",
    });
  }
</script>

<h1>Eredményhirdetés</h1>

<section>
  <button on:click={goToGathering}> Új játék </button>
</section>
