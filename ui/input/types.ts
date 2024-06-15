import { UseFormRegister } from "react-hook-form";

export type InputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  type?: string;
  name?: string;
  id?: string;
  className?: string;
  style?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  register?: UseFormRegister<any>;
  errorMessage?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  min?: string;
  max?: string;
  step?: string;
  inputmode?: string;
  pattern?: string;
};
