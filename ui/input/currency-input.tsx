"use client";
import React from "react";
import Input from "./input";
import DollarIcon from "../icons/dollar-icon";

const CurrencyInput = ({
  onChange,
}: {
  onChange?: (value: string) => void;
}) => {
  const [inputValue, setInputValue] = React.useState("0.00");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const textValue = event.target.value;
    if (!isNaN(Number(textValue)) || textValue !== "") {
      setInputValue(textValue);
      onChange?.(textValue);
    }
  };

  const handleBlur = () => {
    const value = inputValue.replace(/[^0-9.]/g, "");
    console.log(value);
    const formattedValue = parseFloat(value).toFixed(2);
    setInputValue(formattedValue);
    onChange?.(formattedValue);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleBlur();
    }
  };

  return (
    <Input
      leftIcon={<DollarIcon className="absolute top-1/2 left-4" />}
      type="text"
      label="Amount"
      placeholder="0.00"
      min="0.00"
      max="1000000.00"
      step="0.01"
      pattern="^\d+(\.\d{2})?$"
      name="currency"
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyPress={handleKeyPress}
    />
  );
};

export default CurrencyInput;
