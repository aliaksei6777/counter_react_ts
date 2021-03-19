import {StateType} from "./App";

const SET_COUNTER_VALUE = "SET-COUNTER-VALUE"
const SET_MAX_VALUE = "SET-MAX-VALUE"
const SET_START_VALUE = "SET-START-VALUE"
const SET_TEXT_MODE = "SET-TEXT-MODE"
const SET_BUTTON_DISABLE = "SET-BUTTON-DISABLE"
const SET_SETUP_BLOCK = "SET-SETUP-BLOCK"

export const setCounterValueAC = (value: number) => {
    return {
        type: SET_COUNTER_VALUE,
        value: value
    } as const
}
export const setMaxValueAC = (value: number) => {
    return {
        type: SET_MAX_VALUE,
        value: value
    } as const
}
export const setStartValueAC = (value: number) => {
    return {
        type: SET_START_VALUE,
        value: value
    } as const
}
export const setTextModeAC = (mode: boolean) => {
    return {
        type: SET_TEXT_MODE,
        mode: mode
    } as const
}
export const setDisableButtonAC = (mode: boolean) => {
    return {
        type: SET_BUTTON_DISABLE,
        mode: mode
    } as const
}
export const setBlockSetupAC = (mode: boolean) => {
    return {
        type: SET_SETUP_BLOCK,
        mode: mode
    } as const
}

type setMaxValueType = ReturnType<typeof setMaxValueAC>
type setCounterValueType = ReturnType<typeof setCounterValueAC>
type setStartValueType = ReturnType<typeof setStartValueAC>
type setTextModeType = ReturnType<typeof setTextModeAC>
type setDisableButtonType = ReturnType<typeof setDisableButtonAC>
type setBlockSetupType = ReturnType<typeof setBlockSetupAC>

export type ActionType = setMaxValueType | setCounterValueType | setStartValueType
    | setTextModeType | setDisableButtonType | setBlockSetupType

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case SET_COUNTER_VALUE:
            return {...state, counterValue: action.value}
        case SET_MAX_VALUE:
            return {...state, maxValue: action.value}
        case SET_START_VALUE:
            return {...state, startValue: action.value}
        case SET_TEXT_MODE:
            return {...state, textMode: action.mode}
        case SET_BUTTON_DISABLE:
            return {...state, buttonDisable: action.mode}
        case SET_SETUP_BLOCK:
            return {...state, setupBlock: action.mode}
        default:
            throw new Error('Wrong action type!!!')
    }
    return state;
}
