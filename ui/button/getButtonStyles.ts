import { ButtonSize, Category } from "./types";

export const getButtonStyles = (
  category: Category = "primary",
  btnSize: ButtonSize = "base"
) => {
  const buttonSize = getButtonSize(btnSize);

  const commonStyles = `capitalize flex flex-row justify-center items-center max-w-fit w-full font-bold ${buttonSize} border-solid hover:opacity-90 transition-opacity duration-200 ease-in-out`;

  switch (category) {
    case "primary":
      return `${commonStyles} bg-cyan-100 text-cyan-900 border-cyan-900`;
    case "secondary":
      return `${commonStyles} bg-violet-100 text-violet-900 ${buttonSize} border-violet-900`;
    case "tertiary":
      return `${commonStyles} bg-pink-100 text-pink-900  border-pink-900`;
    case "info":
      return `${commonStyles} bg-blue-100 text-blue-900  border-blue-900`;
    case "warning":
      return `${commonStyles} bg-amber-500 text-amber-100  border-amber-900`;
    case "danger":
      return `${commonStyles} bg-rose-600 text-rose-50  border-rose-700`;
    case "success":
      return `${commonStyles} bg-lime-500 text-lime-50  border-lime-700`;
    default:
      return `${commonStyles} bg-cyan-100 text-cyan-900  border-cyan-900`;
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
