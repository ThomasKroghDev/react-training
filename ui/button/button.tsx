"use client";
import React from "react";
import { ButtonSize, Category } from "./types";
import { getButtonStyles } from "./getButtonStyles";

const Button = ({
  children,
  category = "primary",
  onClick,
  state = "active",
  size = "base",
}: {
  children?: string | JSX.Element;
  category?: Category;
  onClick?: () => void;
  state?: "active" | "disabled" | "loading";
  size: ButtonSize;
}) => {
  const handleClick = () => {
    if (state === "active") {
      onClick?.();
    }
  };

  const styleClassNames = getButtonStyles(category, size);

  return (
    <button type="button" className={styleClassNames} onClick={handleClick}>
      {state === "loading" ? "Loading..." : children}
    </button>
  );
};

export default Button;
