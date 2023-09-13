"use client";

import React from "react";

export interface IGameStateProps {
  bonesCount: number;
  chickenCount: number;
}

const GameState = (props: IGameStateProps) => {
  const { bonesCount, chickenCount } = props;
  return (
    <section className="flex items-center justify-center gap-4 m-4">
      <div className="flex items-center gap-2">
        <p className="text-slate-400 text-sm font-black">{bonesCount}</p>
        <p className="text-slate-600 text-sm font-black">x</p>
        <img className="w-6" src="/small-bone.png" alt="small-bone" />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-slate-400 text-sm font-black">{chickenCount}</p>
        <p className="text-slate-600 text-sm font-black">x</p>
        <img className="w-6" src="/small-chicken.png" alt="small-chicken" />
      </div>
    </section>
  );
};

export default GameState;
