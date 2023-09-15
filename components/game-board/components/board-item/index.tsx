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

  // Renderiza la imagen del item
  const renderImagen = item.visibled
    ? item.name || "bone"
    : item.name || "chicken"
    ? "empty"
    : "";

  // Revela los items que fueron seleccionados
  const revealedItem =
    endGame && item.revealed
      ? "opacity-100"
      : !endGame
      ? "opacity-100"
      : "opacity-50";

  return (
    <div
      className={`cursor-pointer animate-[wiggle_1s_infinite_alternate] ${revealedItem}`}
      data-testid="board-item"
      onClick={() => !item.visibled && startGame && handleSelected(item)}
    >
      <img src={`/${renderImagen}.png`} alt="board-item" />
    </div>
  );
};

export default BoardItem;
