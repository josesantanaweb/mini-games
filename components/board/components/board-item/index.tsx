"use client";

import { IBoardItem } from "@/interfaces";

export interface IBoardItemProps {
  handleSelected: (selectedItem: IBoardItem) => void;
  item: IBoardItem;
  startGame: boolean;
}

const BoardItem = (props: IBoardItemProps) => {
  const { item, handleSelected, startGame } = props;

  const renderImagen = item.visibled
    ? item.name || "bone"
    : item.name || "chicken"
    ? "empty"
    : "";

  return (
    <div
      className="cursor-pointer animate-[wiggle_1s_infinite_alternate]"
      data-testid="board-item"
      onClick={() => (!item.visibled && startGame) && handleSelected(item)}
    >
      <img src={`/${renderImagen}.png`} alt="board-item" />
    </div>
  );
};

export default BoardItem;
