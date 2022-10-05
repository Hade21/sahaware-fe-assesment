import React from "react";
import { InputProps } from "../../../../interface.model";

const Input = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className="mb-2 text-base font-normal">
        {label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="rounded border border-input-border px-4 py-3 text-xl font-normal text-placeholder"
      />
    </div>
  );
};

export default Input;
