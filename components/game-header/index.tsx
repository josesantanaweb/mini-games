"use client";

import Wallet from "./components/wallet";
import Settings from "./components/settings";
import Brand from "./components/brand";
import BetLimit from "./components/bet-limit";
import { MIN_BET_AMOUNT, MAX_BET_AMOUNT } from "@/constants";
export interface IGameHeaderProps {
  balance: number;
}

const Header = (props: IGameHeaderProps) => {
  const { balance } = props;

  return (
    <header className="p-2">
      <div className="flex items-center justify-between mb-2">
        <Wallet amount={balance} />
        <Settings />
      </div>
      <div className="flex items-center justify-between px-3 py-2 rounded-md h-11 bg-slate-800">
        <Brand />
        <BetLimit amount={MIN_BET_AMOUNT} minLimitActive />
        <BetLimit amount={MAX_BET_AMOUNT} />
      </div>
    </header>
  );
};

export default Header;
