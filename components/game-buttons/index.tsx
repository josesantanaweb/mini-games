"use client";

import BetButton from "./components/bet-button";

export interface IGameButtonsProps {
  startGame: boolean;
  betAmount: number;
  totalWinAmount: number;
  handleBetButton: () => void;
}

const BetButtons = (props: IGameButtonsProps) => {
  const { startGame, betAmount, totalWinAmount, handleBetButton } = props;

  return (
    <section className="p-2">
      {startGame ? (
        <BetButton
          onClick={handleBetButton}
          label="Retirar"
          secondaryLabel={`${totalWinAmount.toFixed(2)} USD`}
          variant="secondary"
        />
      ) : (
        <BetButton
          onClick={handleBetButton}
          label="Apostar"
          disabled={betAmount <= 0}
        />
      )}
    </section>
  );
};

export default BetButtons;
