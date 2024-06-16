import React from "react";
import { InputProps } from "./types";
import { getBaseInputStyles } from "./getInputStyles";

function Input({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  onKeyPress,
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
  rightIcon,
  leftIcon,
  pattern,
  ...props
}: InputProps) {
  const { inputContainer, labelStyle, inputStyle, errorMessageStyle } =
    getBaseInputStyles(!errorMessage ? false : true);

  return (
    <div className={`${inputContainer} relative`}>
      <label className={`${labelStyle}`}>{label}</label>
      <input
        {...props}
        type={type}
        placeholder={placeholder}
        className={`${inputStyle} ${rightIcon ? "pr-10" : ""} ${
          leftIcon ? "pl-10" : ""
        } ${className}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
      />
      {leftIcon && leftIcon}
      {rightIcon && rightIcon}
      <p className={`${errorMessageStyle}`}>{errorMessage}</p>
    </div>
  );
}

export default Input;
