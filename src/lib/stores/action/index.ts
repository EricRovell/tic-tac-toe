import { board, history } from "../board";
import { score } from "../status";

export function startNewGame(): void {
  board.reset();
  history.reset();
  score.reset();
}

export function startNewRound(): void {
  board.reset();
  history.reset();
}