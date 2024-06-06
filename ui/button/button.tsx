"use client";
import React, { ReactElement } from "react";
import { ButtonSize, Category } from "./types";
import { getButtonStyles } from "./getButtonStyles";

const Button = ({
  children,
  category = "primary",
  onClick,
  state = "active",
  size = "base",
  leftIcon,
  rightIcon,
}: {
  children?: string | JSX.Element;
  category?: Category;
  onClick?: () => void;
  state?: "active" | "disabled" | "loading";
  size: ButtonSize;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}) => {
  const handleClick = () => {
    if (state === "active") {
      onClick?.();
    }
  };

  const styleClassNames = getButtonStyles(category, size);

  return (
    <button type="button" className={styleClassNames} onClick={handleClick}>
      {leftIcon && <>{leftIcon}</>}
      {state === "loading" ? "Loading..." : children}
      {rightIcon && <>{rightIcon}</>}
    </button>
  );
};

export default Button;
