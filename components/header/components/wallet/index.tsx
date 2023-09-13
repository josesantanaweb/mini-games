"use client";

export interface IWalletProps {
  amount: number;
}

const Wallet = (props: IWalletProps) => {
  const { amount } = props;
  return (
    <div className="flex items-center justify-between w-2/5 px-3 rounded-md bg-slate-800 h-9">
      <p
        className="text-sm font-bold text-violet-700"
        data-testid="wallet-amount"
      >
        {amount > 0 ? amount.toFixed(2) : 0.00}
      </p>
      <p
        className="text-sm font-bold text-slate-600"
        data-testid="wallet-currenry"
      >
        USD
      </p>
    </div>
  );
};

export default Wallet;
