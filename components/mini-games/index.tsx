'use client';

import { luckiest } from "@/utils/fonts";
import { minigames } from "@/data";

const MiniGames = () => {
  return (
    <div className={luckiest.className}>
      <h1 className="my-8 text-3xl text-center text-gray-200">
        MINI <span className="text-yellow-400 drop-shadow-md">GAMES</span>
      </h1>
      <div className="grid items-center grid-cols-2 gap-4 px-4">
        {minigames.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className={`relative block overflow-hidden list-none w-30 h-30 rounded-[1.5rem] ${
              item.active ? "opacity-100" : "opacity-30"
            }`}
          >
            <h5 className="absolute bottom-0 left-0 z-10 w-full py-4 text-lg text-center text-white capitalize">
              {item.name}
            </h5>
            <img
              src={`/${item.path}.png`}
              alt="cover"
              className="w-full h-full transition-all hover:scale-110"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default MiniGames
