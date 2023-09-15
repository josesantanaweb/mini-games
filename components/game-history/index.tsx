"use client";

import { IHistory } from "@/interfaces";
import HistoryItem from "./components/history-item"

export interface IGameHistoryProps {
  histories: IHistory[];
}

const GameHistory = (props: IGameHistoryProps) => {
  const { histories } = props;
  return (
    <>
      <div className="p-2 m-2 rounded-md bg-slate-800">
        <div className="w-full py-2 rounded-md bg-slate-950">
          <p className="font-bold text-center text-slate-400">Mis Apuestas</p>
        </div>
      </div>
      <div className="p-2 m-2 rounded-md bg-slate-800">
        <div className="flex items-center justify-between w-full p-3 rounded-md bg-slate-950">
          <p className="text-sm font-bold text-center truncate w-14 text-slate-400">
            Fecha
          </p>
          <p className="text-sm font-bold text-center truncate w-14 text-slate-400">
            Coeficiente
          </p>
          <p className="text-sm font-bold text-center truncate w-14 text-slate-400">
            Apuesta
          </p>
          <p className="text-sm font-bold text-center truncate w-14 text-slate-400">
            Ganado
          </p>
        </div>
        {histories.map((history, index) => (
          <HistoryItem history={history} key={index} />
        ))}
      </div>
    </>
  );
};

export default GameHistory;
