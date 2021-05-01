export type PlayerMark = 1 | -1;
export type BoardMark = PlayerMark | null;

export type Board = BoardMark[][];

export interface WinnerCheck {
  board: Board;
  row: number;
  column: number;
  value: PlayerMark;
  consecutive: number;
}

export interface TestCase extends WinnerCheck {
  win: boolean;
}

export interface Cell {
  row: number;
  column: number;
}

export interface BoardCell extends Cell {
  value: BoardMark;
}

export interface UserMove extends Cell {
  value: PlayerMark;
}

export type History = UserMove[];

export type Score = [ PlayerX: number, PlayerY: number ];

export interface MarkSkin {
  title: string;
  viewBox: string;
  "1": string;
  "-1": string;
}