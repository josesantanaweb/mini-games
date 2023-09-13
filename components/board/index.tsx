"use client";

import BoardItem from "./components/board-item";
import { IBoardItem } from "@/interfaces";

export interface IBoardProps {
  handleSelected: (selectedItem: IBoardItem) => void;
  board: IBoardItem[];
  startGame: boolean;
}

const Board = (props: IBoardProps) => {
  const { board, handleSelected, startGame } = props;

  return (
    <section className="grid grid-cols-5 gap-5 p-4">
      {board.map((item: IBoardItem, index: number) => (
        <BoardItem
          item={item}
          key={index}
          handleSelected={handleSelected}
          startGame={startGame}
        />
      ))}
    </section>
  );
};

export default Board;
