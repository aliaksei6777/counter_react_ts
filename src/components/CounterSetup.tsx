import React, {ChangeEvent} from 'react';
import {Button} from './Button';
import s from './CounterSetup.module.css'
import {StateType} from "../App";
import {ActionType, setCounterValueAC, setDisableButtonAC,
    setMaxValueAC, setStartValueAC, setTextModeAC} from "../counter-reducer";

type CounterSetupPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

const CounterSetup: React.FC<CounterSetupPropsType> = ({state,dispatch}) => {
    const maxValue = state.maxValue
    const startValue = state.startValue

    const onSetClickHandler = () => {
        dispatch(setMaxValueAC(maxValue))
        dispatch(setCounterValueAC(startValue))
        dispatch(setTextModeAC(false))
        dispatch(setDisableButtonAC(true))
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(e.currentTarget.valueAsNumber))
        e.currentTarget.valueAsNumber < 1 || e.currentTarget.valueAsNumber <= startValue
            ? dispatch(setDisableButtonAC(true))
            : dispatch(setDisableButtonAC(false));
        dispatch(setTextModeAC(true))
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(e.currentTarget.valueAsNumber));
        e.currentTarget.valueAsNumber < 0 || e.currentTarget.valueAsNumber >= maxValue
            ? dispatch(setDisableButtonAC(true))
            : dispatch(setDisableButtonAC(false));
        dispatch(setTextModeAC(true))
    }

    const maxValueInputClass = maxValue < 0 || maxValue <= startValue ? s.errorInput : ""
    const startValueInputClass = startValue < 0 || maxValue <= startValue ? s.errorInput : ""

    return (
        <div>
            <div className={s.mainBlock}>
                <div className={s.counterBlock}>
                    <div className={s.valueDisplay}>
                        <span>max value: </span>
                        <input className={maxValueInputClass}
                               value={maxValue}
                               type={"number"}
                               onChange={onChangeMaxValue}/>
                    </div>
                    <div className={s.valueDisplay}>
                        <span>start value: </span>
                        <input
                            className={startValueInputClass}
                            value={startValue}
                            type={"number"}
                            onChange={onChangeStartValue}/>
                    </div>
                </div>
                <div className={s.buttonBlock}>
                    <Button onClick={onSetClickHandler}
                            buttonTitle={"set"}
                            disabled={state.buttonDisable}/>
                </div>
            </div>
        </div>
    )
}

export default CounterSetup