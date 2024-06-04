import { ButtonSize, Category } from "./types";

export const getButtonStyles = (category: Category='primary',btnSize:ButtonSize="base" ) => {

    const buttonSize = getButtonSize(btnSize)

    switch (category) {
        case "primary":
            return `capitalize bg-cyan-100 font-bold text-cyan-900 ${buttonSize} border-solid  border-cyan-900`
        case "secondary":
            return `capitalize bg-violet-100 font-bold text-violet-900 ${buttonSize} border-solid  border-violet-900`
        case "tertiary":
            return `capitalize bg-pink-100 font-bold text-pink-900 ${buttonSize} border-solid  border-pink-900`
        case "info":
            return `capitalize bg-blue-100 font-bold text-blue-900 ${buttonSize} border-solid  border-blue-900`
        case "warning":
            return `capitalize bg-amber-500 font-bold text-amber-100 ${buttonSize} border-solid  border-amber-900`
        case "danger":
            return `capitalize bg-rose-600 font-bold text-rose-50 ${buttonSize} border-solid  border-rose-700`
        case "success":
            return`capitalize bg-lime-500 font-bold text-lime-50 ${buttonSize} border-solid  border-lime-700`
        default:
            return `capitalize bg-cyan-100 font-bold text-cyan-900 ${buttonSize} border-solid  border-cyan-900`
    }

}

const getButtonSize = (size: ButtonSize) => {
    switch (size) {
        case "xs":
            return `text-xs px-1 py-1 border border-solid`
        case "sm":
            return `text-sm px-2 py-1 border border-solid`
        case "base":
            return `text-base px-3 py-2 border-2 border-solid`
        case "lg":
            return `text-lg px-4 py-2 border-4 border-solid`
        case "xl":
            return `text-xl px-5 py-3 border-8  border-solid`
        default:
            return `text-base px-4 py-2 border-2 border-solid`
    }
}