import { UseFormRegister } from "react-hook-form";

export type InputProps = {
  label?: string;
  placeholder: string;
  value?: string;
  onChange?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  type: string;
  name?: string;
  id?: string;
  className?: string;
  style?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  register?: UseFormRegister<any>;
  errorMessage?: string;
};
