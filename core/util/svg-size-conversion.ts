export const svgSizeConversion = (size: string): string => {
    switch (size) {
        case "xs":
        return "16";
        case "sm":
        return "17.2";
        case "base":
        return "22";
        case "lg":
        return "24";
        case "xl":
        return "26";
        default:
        return "16";
    }
}