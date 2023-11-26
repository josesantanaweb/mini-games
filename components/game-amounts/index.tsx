"use client";

import React from "react";
import NextAmount from "./components/next-amount";
import TotalAmount from "./components/total-amount";

export interface IGameAmountsProps {
  nextWinAmount: number;
  totalWinAmount: number;
  odd: number;
  nextOdd: number;
}

const GameAmounts = (props: IGameAmountsProps) => {
  const { nextWinAmount, odd, nextOdd, totalWinAmount } = props;

  return (
    <section className="flex gap-2 items-center justify-between mx-2">
      <NextAmount nextWinAmount={totalWinAmount} odd={nextOdd} />
      <TotalAmount totalWinAmount={totalWinAmount} odd={odd} />
    </section>
  );
};

export default GameAmounts;
