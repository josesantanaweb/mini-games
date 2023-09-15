"use client";

import BoardItem from "./components/board-item";
import { IBoardItem } from "@/interfaces";

export interface IGameBoardProps {
  handleSelected: (selectedItem: IBoardItem) => void;
  board: IBoardItem[];
  startGame: boolean;
  endGame: boolean;
}

const GameBoard = (props: IGameBoardProps) => {
  const { board, handleSelected, startGame, endGame } = props;

  return (
    <section className="grid grid-cols-5 gap-5 p-4">
      {board.map((item: IBoardItem, index: number) => (
        <BoardItem
          item={item}
          key={index}
          handleSelected={handleSelected}
          startGame={startGame}
          endGame={endGame}
        />
      ))}
    </section>
  );
};

export default GameBoard;
