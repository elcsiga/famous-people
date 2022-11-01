<script lang="ts">
  import type { SendSheetsCommand } from "../shared/types";
  import { Card, Input, Label } from "flowbite-svelte";
  import { onDestroy } from "svelte";
  import { gameConfig } from "../shared/config";
  import { isSheetValid } from "../shared/utilities";
  import { send, me } from "../game/state";

  import {
    CheckCircle
  } from "svelte-heros-v2";

  let mySheets = $me.sheets;
  while (mySheets.length < gameConfig.sheets.count) {
    mySheets.push("");
  }

  let timer: any;
  const onChange = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      send<SendSheetsCommand>({
        command: "sendSheets",
        sheets: mySheets,
      });
    }, 750);
  };

  const isValid = (sheet: string): boolean => isSheetValid(sheet);

  onDestroy(() => clearTimeout(timer));
  const plaxeholders = [
    "pl. Magnus Carlssen",
    "pl. Berzsenyi Dániel",
    "pl. Odüsszeusz",
    "pl. Kincsem",
    "pl. Garfield",
  ];
</script>

<Card>
  <p>Irj {gameConfig.sheets.count} híres embert!</p>
  {#each mySheets as mySheet, index}
    <div class="space-y-2">
      <Input
        bind:value={mySheet}
        on:keyup={() => onChange()}
        type="text"
        placeholder={plaxeholders[index]}
        size="md"
      >
        <span slot="right">
          {#if isValid($me.sheets[index])}
            <CheckCircle />
          {/if}
        </span>
      </Input>
    </div>
  {/each}
</Card>
