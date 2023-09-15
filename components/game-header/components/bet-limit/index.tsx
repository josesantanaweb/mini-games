"use client";

export interface IBetLimitProps {
  amount: number;
  minLimitActive?: boolean;
}

const BetLimit = (props: IBetLimitProps) => {
  const { amount, minLimitActive = false } = props;
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-col items-start justify-between gap-1">
        <p
          className="text-xs font-bold text-slate-600"
          data-testid="betlimit-text"
        >
          {minLimitActive ? "Min de Apuesta:" : "Max de Apuesta:"}
        </p>
        <p className="text-xs font-bold text-slate-600">
          <span
            className="text-slate-400 mr-2"
            data-testid="betlimit-amount"
          >
            {amount.toFixed(2)}
          </span>
          <span>USD</span>
        </p>
      </div>
    </div>
  );
};

export default BetLimit;
