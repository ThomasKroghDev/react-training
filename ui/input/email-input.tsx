import React from "react";
import Input from "./input";
import EmailIcon from "../icons/email-icon";

export const EmailInput = ({
  onChange,
}: {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Input
      leftIcon={<EmailIcon className="absolute top-1/2 left-4" />}
      type="email"
      label="Email"
      name="email"
      placeholder="Enter your email"
      onChange={onChange}
    />
  );
};
