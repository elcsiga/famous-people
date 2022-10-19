<script lang="ts">
  import type { StopCommand } from "../shared/types";
  import { send } from "../game/state";

  function stop() {
    send<StopCommand>({
      command: "stop",
    });
  }
</script>

<h1>Játék!!!</h1>

<section>
  <button on:click={stop}> Játék vége </button>
</section>
