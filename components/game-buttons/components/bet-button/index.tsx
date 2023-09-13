"use client";

import React from "react";

export interface IBetButtonProps {
  onClick: () => void;
  label: string;
  secondaryLabel?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

const BetButton = (props: IBetButtonProps) => {
  const {
    onClick,
    label,
    secondaryLabel,
    disabled,
    variant = "primary",
  } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex
        items-center
        justify-center
        w-full
        h-14
        text-lg
        font-bold
        uppercase
        rounded-lg
        relative
        outline-none
        active:top-2
        active:shadow-[0_0]
        text-white
        ${
          variant === "primary"
            ? "bg-violet-700 shadow-[0_6px_rgba(92,33,183,1)]"
            : "bg-red-600 shadow-[0_6px_rgba(195,0,22,1)]"
        }
      `}
    >
      {label}
      <span className="ml-2 text-yellow-200">
        {secondaryLabel?.length && secondaryLabel}
      </span>
    </button>
  );
};

export default BetButton;
