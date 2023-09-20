"use client";

import { IMiniGame } from "@/interfaces"

export interface IMiniGameItemProps {
  minigame: IMiniGame;
}

const MiniGamesItem = (props: IMiniGameItemProps) => {
  const { minigame } = props;
  return (
    <a
      href={minigame.path}
      className={`relative block overflow-hidden list-none w-30 h-30 rounded-3xl ${
        minigame.active ? "opacity-100" : "opacity-30"
      }`}
    >
      <h5 className="absolute bottom-0 left-0 z-10 w-full py-4 text-lg text-center text-white capitalize">
        {minigame.name}
      </h5>
      <img
        src={`/${minigame.path}.png`}
        alt="cover"
        className="w-full h-full transition-all hover:scale-110"
      />
    </a>
  );
};

export default MiniGamesItem;
