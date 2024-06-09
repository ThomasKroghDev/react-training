export const getBaseInputStyles = (hasError = false) => {
  const inputContainer = "flex flex-col px-2 py-1 w-full";
  const labelStyle = "text-sm";
  const inputStyle = `border ${
    hasError ? "border-red-500" : "border-gray-300"
  } rounded-md px-2 py-2`;
  const errorMessageStyle = "text-red-500 text-sm";
  return { inputContainer, labelStyle, inputStyle, errorMessageStyle };
};
