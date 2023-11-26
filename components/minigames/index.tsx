'use client';

import { luckiest } from "@/utils/fonts";
import { minigames } from "@/data";
import MiniGamesItem from "./components/minigames-item";

const MiniGames = () => {
  return (
    <div className={luckiest.className}>
      <h1 className="my-8 text-3xl text-center text-gray-200 uppercase">
        MINI <span className="text-yellow-400 drop-shadow-md">GAMES</span>
      </h1>
      <div className="grid items-center grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 px-4">
        {minigames.map((minigame, index) => (
          <MiniGamesItem minigame={minigame} key={index} />
        ))}
      </div>
    </div>
  );
}

export default MiniGames
