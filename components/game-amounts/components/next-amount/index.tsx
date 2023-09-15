"use client";

import React from "react";

export interface INextAmountProps {
  nextWinAmount: number;
  odd: number;
}

const NextAmount = (props: INextAmountProps) => {
  const { nextWinAmount, odd } = props;
  return (
    <div className="flex items-center justify-between bg-slate-800 rounded-md flex-col gap-1 w-full px-2 py-1 h-14">
      <p className="text-sm text-slate-600 w-full font-bold">Próximo Monto</p>
      <div className="flex items-center justify-between w-full">
        <p className="text-sm text-slate-400 font-bold">{odd.toFixed(2)}x</p>
        <p className="font-bold text-sm text-slate-400">
          {nextWinAmount.toFixed(2)}
          <span className="text-sm text-slate-600 ml-1">USD</span>
        </p>
      </div>
    </div>
  );
};

export default NextAmount;
