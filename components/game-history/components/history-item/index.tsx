"use client";

import { IHistory } from "@/interfaces";

export interface IHistoryItemProps {
  history: IHistory;
}
const HistoryItem = (props: IHistoryItemProps) => {
  const { history } = props;


  const betStatus =
    history.status === "win" ? "text-lime-500" : "text-slate-400";

  return (
    <div className="flex items-center justify-between w-full p-3">
      <p className={`w-16 text-sm font-bold text-center truncate ${betStatus}`}>
        {history.date}
      </p>
      <p className={`w-16 text-sm font-bold text-center truncate ${betStatus}`}>
        {history.coefficient ? history.coefficient.toFixed(2) : "-"}
      </p>
      <p className={`w-16 text-sm font-bold text-center truncate ${betStatus}`}>
        {history.betAmount} USD
      </p>
      <p className={`w-16 text-sm font-bold text-center truncate ${betStatus}`}>
        {history.totalWinAmount
          ? `${history.totalWinAmount.toFixed(2)} USD`
          : "-"}
      </p>
    </div>
  );
};

export default HistoryItem;
