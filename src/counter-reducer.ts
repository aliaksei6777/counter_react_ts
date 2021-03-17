import {StateRootType} from "./App";


export const setCounterValueAC = (value: number) => {
    return {
        type: "SET_COUNTER_VALUE",
        value: value
    } as const
}
export const setMaxValueAC = (value: number) => {
    return {
        type: "SET_MAX_VALUE",
        value: value
    } as const
}
export const setStartValueAC = (value: number) => {
    return {
        type: "SET_START_VALUE",
        value: value
    } as const
}
export const setTextModeAC = (mode: boolean) => {
    return {
        type: "SET_TEXT_MODE",
        mode: mode
    } as const
}
export const setDisableButtonAC = (mode: boolean) => {
    return {
        type: "SET_BUTTON_DISABLE",
        mode: mode
    } as const
}

type setMaxValueType = ReturnType<typeof setMaxValueAC>
type setCounterValueType = ReturnType<typeof setCounterValueAC>
type setStartValueType = ReturnType<typeof setStartValueAC>
type setTextModeType = ReturnType<typeof setTextModeAC>
type setDisableButtonType = ReturnType<typeof setDisableButtonAC>

export type ActionType = setMaxValueType | setCounterValueType | setStartValueType | setTextModeType | setDisableButtonType

export const reducer = (state: StateRootType, action: ActionType): StateRootType => {
    switch (action.type) {
        case "SET_COUNTER_VALUE":
            return {...state, counterValue: action.value}
        case "SET_MAX_VALUE":
            return {...state, maxValue: action.value}
        case "SET_START_VALUE":
            return {...state, startValue: action.value}
        case "SET_TEXT_MODE":
            return {...state, textMode: action.mode}
        case "SET_BUTTON_DISABLE":
            return {...state, buttonDisable: action.mode}
    }
    return state;
}
