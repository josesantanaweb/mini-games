"use client";

import React from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

export interface IGameBoneBoxProps {
  boneCount: number;
  startGame: boolean;
  initOdd: number;
  handleBoneDecrease: () => void;
  handleBoneIncrease: () => void;
}

const GameBoneBox = (props: IGameBoneBoxProps) => {
  const {
    boneCount,
    startGame,
    handleBoneDecrease,
    handleBoneIncrease,
    initOdd,
  } = props;

  return (
    <section className="flex items-center justify-between px-3 mx-2 my-2 border border-solid rounded-md h-14 border-slate-600">
      <div className="flex items-center justify-center">
        <div>
          <p className="font-bold mr-4 text-md text-slate-400 flex gap-5">
            Huesos
            <span className="font-bold text-md text-violet-700">{boneCount}</span>
          </p>
          <p className="font-bold mr-4 text-[10px] text-slate-600">
            Multiplicador inicial (<span className="text-slate-400"> {initOdd.toFixed(2)} </span>x)
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-slate-800"
          onClick={handleBoneDecrease}
          disabled={startGame || boneCount <= 1}
        >
          <BiMinus size={22} />
        </button>
        <button
          className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-slate-800"
          onClick={handleBoneIncrease}
          disabled={startGame || boneCount >= 24}
        >
          <BiPlus size={22} />
        </button>
      </div>
    </section>
  );
};

export default GameBoneBox;
