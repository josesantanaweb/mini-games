"use client";

import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

export interface IGameBetBoxProps {
  betAmount: number;
  balance: number;
  startGame: boolean;
  handleAmountDecrease: () => void;
  handleAmountIncrease: () => void;
}

const GameBetBox = (props: IGameBetBoxProps) => {
  const {
    betAmount,
    balance,
    startGame,
    handleAmountIncrease,
    handleAmountDecrease,
  } = props;

  return (
    <section className="flex items-center justify-between px-3 mx-2 my-2 border border-solid rounded-md h-14 border-slate-600">
      <div className="flex items-center justify-center">
        <p className="font-bold mr-4 text-md text-slate-400">Apuesta</p>
        <p className="font-bold text-md text-violet-700">
          {betAmount.toFixed(2)}
          <span className="ml-2 text-sm font-bold text-slate-400">USD</span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-slate-800"
          onClick={handleAmountDecrease}
          disabled={startGame || betAmount <= 0}
        >
          <BiMinus size={22} />
        </button>
        <button
          className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-slate-800"
          onClick={handleAmountIncrease}
          disabled={startGame || betAmount >= balance}
        >
          <BiPlus size={22} />
        </button>
      </div>
    </section>
  );
};

export default GameBetBox;
