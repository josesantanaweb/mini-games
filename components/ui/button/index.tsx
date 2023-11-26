"use client";

import React from "react";

export interface IButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
}

const Button = (props: IButtonProps) => {
  const {
    onClick,
    label,
    disabled,
    variant = "primary",
    size = "medium",
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
        font-semibold
        capitalize
        rounded-md
        relative
        outline-none
        active:top-2
        active:shadow-[0_0]
        text-slate-400
        ${variant === "primary" ? "bg-violet-700 text-white" : "bg-slate-800"}
        ${size === "small" ? "h-9 px-4 text-xs" : "h-11 px-5 text-md"}
        ${disabled && "disabled:opacity-50"}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
