import { gameConfig } from "./config";
import type { Player } from "./types";

export const isSheetValid = (sheet: string): boolean => sheet.trim().length >= gameConfig.sheets.minLength;

export const numOfValidSheets = (player: Player): number => player.sheets.length === gameConfig.sheets.count
  ? player.sheets.reduce((n, sheet) => isSheetValid(sheet) ? n+1 : n, 0)
  : 0;

  export const areSheetsReady = (player: Player): boolean => numOfValidSheets(player) === gameConfig.sheets.count;
  export const areGroupsSetUp = (player: Player): boolean => player.ord >= 0;

export const shuffleGroups = (players: Player[]) => {
  const playersShuffled = [...players];
  shuffle(playersShuffled);
  playersShuffled.forEach((player, index) => player.ord = index);
}

export const getGroup = (player: Player) => player.ord % gameConfig.groups.count;

export const clearGroups = (players: Player[]) => {
  players.forEach((player) => player.ord = -1);
}

////////

function shuffle(array: any[]) {
  let currentIndex = array.length;
  let randomIndex: number;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}