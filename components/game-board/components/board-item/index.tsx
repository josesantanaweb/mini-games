"use client";

import { IBoardItem } from "@/interfaces";

export interface IBoardItemProps {
  handleSelected: (selectedItem: IBoardItem) => void;
  item: IBoardItem;
  startGame: boolean;
  endGame?: boolean;
}

const BoardItem = (props: IBoardItemProps) => {
  const { item, handleSelected, startGame, endGame } = props;

  const renderImagen = item.visibled
    ? item.name || "bone"
    : item.name || "chicken"
    ? "empty"
    : "";

  return (
    <div
      className={`cursor-pointer animate-[wiggle_1s_infinite_alternate] ${
        (item.visibled && endGame) && 'opacity-50'
      }`}
      data-testid="board-item"
      onClick={() => !item.visibled && startGame && handleSelected(item)}
    >
      <img src={`/${renderImagen}.png`} alt="board-item" />
    </div>
  );
};

export default BoardItem;
