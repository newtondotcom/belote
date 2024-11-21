import type { CardSuite, CardValue, ICard, IPlayer } from "@coinche/shared";
import Master from "./game";

export function setNextPlayerTurn(playerId: string, gameId: string) {
  const game = Master.getInstance(gameId).game;
  const currentPlayerIndex = game.players.findIndex(
    (player: IPlayer) => player.id === playerId,
  );
  const nextPlayerIndex = (currentPlayerIndex + 1) % game.players.length;
  const nextPlayerId = game.players[nextPlayerIndex].id;
  Master.getInstance(gameId).getLastPli().current_player_id = nextPlayerId;
  return nextPlayerId;
}

export function setNextPlayerPli(playerId: string, gameId: string) {
  Master.getInstance(gameId).getLastPli().current_player_id = playerId;
}

const values: CardValue[] = ["7", "8", "9", "J", "Q", "K", "10", "A"];
const suites: CardSuite[] = ["diamonds", "clubs", "hearts", "spades"];

export function generateDeckCards(): ICard[] {
  const cards: ICard[] = [];
  suites.forEach((s) => {
    values.forEach((i) => {
      cards.push({
        value: i,
        valueNum: 0,
        suite: s,
      });
    });
  });
  return cards;
}
