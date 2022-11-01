<script lang="ts">
  import type {
    ApplyCommand,
    GoToGroupingCommand,
    QuitCommand,
    QuitNotConnectedPlayersCommand,
  } from "../shared/types";
  import { gameConfig } from "../shared/config";
  import Pawn from "../compnents/Pawn.svelte";
  import QrCode from "../compnents/QrCode.svelte";
  import { gameReport, send, me } from "../game/state";
  import WriteSheets from "../compnents/WriteSheets.svelte";
  import { areSheetsReady, numOfValidSheets } from "../shared/utilities";
  import { Alert, Button } from "flowbite-svelte";


  const { min, max } = gameConfig.numOfPlayers;

  function apply() {
    const storageKey = "famous-people-name";
    const name = prompt(
      "Mi a neved?",
      window.sessionStorage.getItem(storageKey) || ""
    );
    if (name) {
      window.sessionStorage.setItem(storageKey, name);
      send<ApplyCommand>({
        command: "apply",
        name,
      });
    }
  }

  function quit() {
    send<QuitCommand>({
      command: "quit",
    });
  }

  function startGrouping() {
    send<GoToGroupingCommand>({
      command: "goToGrouping",
    });
  }

  function quitNotConnectedPlayers() {
    send<QuitNotConnectedPlayersCommand>({
      command: "quitNotConnectedPlayers",
    });
  }
</script>

<h1>Gyülekező</h1>

<section>
  <QrCode text={window.location.href} />
</section>

<section>
  {#each $gameReport.players as player}
    <Pawn {player} />
  {/each}
</section>

<section>
  {#if $me}
    <Button class="link" on:click={quit}> Mégsem játszom</Button>
  {/if}
</section>

{#if $me}
  <section>
    <WriteSheets />
  </section>
{/if}

<Alert>
  <p>A játékot {min}-{max} játékos játszhatja.</p>

  {#if !$me && $gameReport.players.length < max}
    <Button on:click={apply}> Játszom én is! </Button>
  {/if}
</Alert>

  <Alert>
    Eddig bedobott kártyák száma:
    {$gameReport.players.reduce((n, player) => n + numOfValidSheets(player), 0)}
  </Alert>

  {#if $gameReport.players.length >= min && $gameReport.players.length <= max}
    {#if $gameReport.players.every((player) => player.connected && areSheetsReady(player))}
      <p>Itt van mindenki?</p>
      <p>
        <button on:click={startGrouping}> Tobább a csoportokhoz! </button>
      </p>
    {/if}
  {/if}

  {#if !$gameReport.players.every((player) => player.connected)}
    <Alert>
      Úgy tűnik valaki nem elérhető.
      <Button on:click={quitNotConnectedPlayers}>
        Kiléptetem őket.
      </Button>
    </Alert>
  {/if}

