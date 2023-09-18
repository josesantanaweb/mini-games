"use client";

import React from "react";

export interface IWalletProps {
  amount: number;
}

const Wallet = (props: IWalletProps) => {
  const { amount } = props;
  return (
    <div className="flex items-center gap-4">
      <div className="cursor-pointer flex items-center justify-center p-2 rounded-md bg-slate-800 h-9 text-slate-400">
        <p className="text-sm font-bold text-slate-400 mr-4">
          {amount > 0 ? amount.toFixed(2) : 0.0}
          <span className="text-sm font-bold text-slate-600 ml-2">USD</span>
        </p>
        <img src="/deposit-icon.png" alt="user" />
      </div>
    </div>
  );
};

export default Wallet;
