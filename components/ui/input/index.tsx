"use client";

import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface IInputProps {
  disabled?: boolean;
  id: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  errors: FieldErrors;
}

const Input = (props: IInputProps) => {
  const { disabled, placeholder, register, id, errors, required } = props;
  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      {...register(id, { required })}
      className="block text-md w-full px-3 font-semibold text-slate-400 placeholder-slate-400  rounded-md outline-none bg-slate-800 h-11"
    />
  );
};

export default Input;
