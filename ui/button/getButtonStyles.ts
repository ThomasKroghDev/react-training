import { ButtonSize, Category } from "./types";

export const getButtonStyles = (
  category: Category = "primary",
  btnSize: ButtonSize = "base"
) => {
  const buttonSize = getButtonSize(btnSize);

  switch (category) {
    case "primary":
      return `capitalize flex flex-row justify-center items-center   max-w-fit  w-full bg-cyan-100 font-bold text-cyan-900 ${buttonSize} border-solid  border-cyan-900`;
    case "secondary":
      return `capitalize flex flex-row justify-center items-center   max-w-fit  w-full bg-violet-100 font-bold text-violet-900 ${buttonSize} border-solid  border-violet-900`;
    case "tertiary":
      return `capitalize flex flex-row justify-center items-center   max-w-fit  w-full bg-pink-100 font-bold text-pink-900 ${buttonSize} border-solid  border-pink-900`;
    case "info":
      return `capitalize flex flex-row justify-center items-center   max-w-fit  w-full bg-blue-100 font-bold text-blue-900 ${buttonSize} border-solid  border-blue-900`;
    case "warning":
      return `capitalize flex flex-row justify-center items-center   max-w-fit  w-full bg-amber-500 font-bold text-amber-100 ${buttonSize} border-solid  border-amber-900`;
    case "danger":
      return `capitalize flex flex-row justify-center items-center   max-w-fit  w-full bg-rose-600 font-bold text-rose-50 ${buttonSize} border-solid  border-rose-700`;
    case "success":
      return `capitalize flex flex-row justify-center items-center   max-w-fit  w-full bg-lime-500 font-bold text-lime-50 ${buttonSize} border-solid  border-lime-700`;
    default:
      return `capitalize flex flex-row justify-center items-center   max-w-fit  w-full bg-cyan-100 font-bold text-cyan-900 ${buttonSize} border-solid  border-cyan-900`;
  }
};

const getButtonSize = (size: ButtonSize) => {
  switch (size) {
    case "xs":
      return `text-xs gap-0.5 px-1 py-1 border border-solid`;
    case "sm":
      return `text-sm gap-1 px-2 py-1 border border-solid`;
    case "base":
      return `text-base gap-2 px-3 py-2 border-2 border-solid`;
    case "lg":
      return `text-lg gap-x-4 px-4 py-2 border-4 border-solid`;
    case "xl":
      return `text-xl gap-x-6 px-5 py-3 border-4  border-solid`;
    default:
      return `text-base px-4 py-2 border-2 border-solid`;
  }
};
