import React from 'react';
import {Buttons} from './Buttons';
import s from "./Counter.module.css"
import {StateRootType} from "../App";
import {ActionType, setCounterValueAC} from "../counter-reducer";

type CounterPropsType = {
    state: StateRootType
    dispatch: (action: ActionType) => void
}

const Counter: React.FC<CounterPropsType> = ({state,dispatch}) =>  {
    const maxValue = state.maxValue
    const startValue = state.startValue
    const counterValue = state.counterValue
    const textMode = state.textMode
    const error = startValue < 0 || maxValue < 0 || maxValue <= startValue

    const counterBlockClass = `${s.counterBlock} ${counterValue === maxValue ? s.red : ""}`
    const textInfoClass = `${error ? s.red : ""}`

    let textInfo = error ? "Incorrect value!" : "enter values and press \'set\'"

    const onIncClickHandler = () => dispatch(setCounterValueAC(counterValue + 1))
    const onResetClickHandler = () => dispatch(setCounterValueAC(startValue))

    return (
        <div>
            <div className={s.mainBlock}>
                <div className={textMode ? s.textMode : counterBlockClass}>
                    {textMode ? <span className={textInfoClass}>{textInfo}</span> :
                    <span>{counterValue}</span>}
                </div>
                <div className={s.buttonBlock}>
                    <Buttons onClick={onIncClickHandler}
                             buttonTitle={"inc"}
                             disabled={counterValue === maxValue || textMode}/>
                    <Buttons onClick={onResetClickHandler}
                             buttonTitle={"reset"}
                             disabled={counterValue === startValue || textMode}/>
                </div>
            </div>
        </div>
    )
}

export default Counter