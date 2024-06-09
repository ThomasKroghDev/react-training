import React from "react";
import { InputProps } from "./types";
import { getBaseInputStyles } from "./getInputStyles";

function Input({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  disabled,
  readOnly,
  required,
  type,
  name,
  id,
  className,
  style,
  inputRef,
  register,
  errorMessage,
  ...props
}: InputProps) {
  const { inputContainer, labelStyle, inputStyle, errorMessageStyle } =
    getBaseInputStyles(!errorMessage ? false : true);

  return (
    <div className={`${inputContainer}`}>
      <label className={`${labelStyle}`}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`${inputStyle}`}
      />
      <p className={`${errorMessageStyle}`}>{errorMessage}</p>
    </div>
  );
}

export default Input;
