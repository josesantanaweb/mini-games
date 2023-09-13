"use client";

import BetButton from "./components/bet-button";

export interface IGameButtonsProps {
  startGame: boolean;
  betAmount: number;
  totalAmount: number;
  handleBetButton: () => void;
}

const BetButtons = (props: IGameButtonsProps) => {
  const { startGame, betAmount, totalAmount, handleBetButton } = props;

  return (
    <section className="p-2">
      {startGame ? (
        <BetButton
          onClick={handleBetButton}
          label="Retirar"
          secondaryLabel={`${totalAmount.toFixed(2)} USD`}
          variant="secondary"
        />
      ) : (
        <BetButton
          onClick={handleBetButton}
          label="Apostar"
          // disabled={betAmount <= 0}
        />
      )}
    </section>
  );
};

export default BetButtons;
