"use client";
import React from "react";
import Input from "./input";
import DollarIcon from "../icons/dollar-icon";

const CurrencyInput = () => {
  return (
    <Input
      leftIcon={<DollarIcon className="absolute top-1/2 left-4" />}
      type="number"
      label="Amount"
      placeholder="0.00"
      min="0.00"
      max="1000000.00"
      step="0.01"
      pattern="^\d+(\.\d{2})?$"
    />
  );
};

export default CurrencyInput;
