import React from 'react';
import {Button} from './Button';
import s from "./Counter.module.css"
import {StateType} from "../App";
import {ActionType, setCounterValueAC} from "../counter-reducer";

type CounterPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
    setupButtonHandler: () => void
}

const Counter: React.FC<CounterPropsType> = ({state,dispatch, setupButtonHandler}) =>  {
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
                    <Button onClick={onIncClickHandler}
                            buttonTitle={"inc"}
                            disabled={counterValue === maxValue || textMode}/>
                    <Button onClick={onResetClickHandler}
                            buttonTitle={"reset"}
                            disabled={counterValue === startValue || textMode}/>
                    <div className={state.setupBlock ? s.setupButton : ""}>
                        <Button onClick={setupButtonHandler} disabled={false} buttonTitle={"setup"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter