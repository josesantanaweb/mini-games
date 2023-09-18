"use client";

import React from "react";

export interface IButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

const Button = (props: IButtonProps) => {
  const {
    onClick,
    label,
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
        h-9
        text-xs
        font-bold
        capitalize
        rounded-md
        relative
        px-4
        outline-none
        active:top-2
        active:shadow-[0_0]
        text-white
        ${variant === "primary" ? "bg-violet-700" : "bg-slate-800"}
        ${disabled && "disabled:opacity-50"}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
