"use client";
import React from "react";
import { InputProps } from "./types";
import Input from "./input";
import EyeIcon from "../icons/eye-icon";
import EyeSlashIcon from "../icons/eye-slash-icon";
import LockIcon from "../icons/lock-icon";

export const PasswordInput = (props: InputProps) => {
  const [visible, setVisible] = React.useState(false);
  const { label, placeholder } = props;
  return (
    <Input
      {...{
        ...props,
        label: label || "Password",
        placeholder: placeholder || "Enter your password",
        type: visible ? "text" : "password",
        leftIcon: <LockIcon className="absolute top-1/2 left-4" />,
        rightIcon: (
          <VisibilityToggle
            visible={visible}
            setVisible={setVisible}
            className="absolute top-1/2 right-4"
          />
        ),
      }}
    />
  );
};

const VisibilityToggle = ({
  visible,
  setVisible,
  className,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  className: string;
}) => {
  const handleToggle = () => {
    setVisible((prev: boolean) => !prev);
  };
  return (
    <button className={className} onClick={handleToggle}>
      {!visible ? <EyeIcon /> : <EyeSlashIcon />}
    </button>
  );
};
