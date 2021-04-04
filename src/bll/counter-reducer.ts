

const SET_COUNTER_VALUE = "SET-COUNTER-VALUE"
const SET_MAX_VALUE = "SET-MAX-VALUE"
const SET_START_VALUE = "SET-START-VALUE"
const SET_TEXT_MODE = "SET-TEXT-MODE"
const SET_BUTTON_DISABLE = "SET-BUTTON-DISABLE"
const SET_SETUP_BLOCK = "SET-SETUP-BLOCK"

export const setCounterValueAC = (counterValue: number) => {
    return {
        type: SET_COUNTER_VALUE,
        payload: {counterValue}
    } as const
}
export const setMaxValueAC = (maxValue: number) => {
    return {
        type: SET_MAX_VALUE,
        payload: {maxValue}
    } as const
}
export const setStartValueAC = (startValue: number) => {
    return {
        type: SET_START_VALUE,
        payload: {startValue}
    } as const
}
export const setTextModeAC = (textMode: boolean) => {
    return {
        type: SET_TEXT_MODE,
        payload: {textMode}
    } as const
}
export const setDisableButtonAC = (buttonDisable: boolean) => {
    return {
        type: SET_BUTTON_DISABLE,
        payload: {buttonDisable}
    } as const
}
export const setBlockSetupAC = (setupBlock: boolean) => {
    return {
        type: SET_SETUP_BLOCK,
        payload: {setupBlock}
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

export type InitialStateType = typeof InitialState

const InitialState = {
    counterValue: 0,
    maxValue: 5,
    startValue: 0,
    textMode: false,
    buttonDisable: true,
    setupBlock: false
}

export const reducer = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_COUNTER_VALUE:
        case SET_MAX_VALUE:
        case SET_START_VALUE:
        case SET_TEXT_MODE:
        case SET_BUTTON_DISABLE:
        case SET_SETUP_BLOCK:
            return {...state, ...action.payload}
        default:
           return state
    }
    return state;
}
