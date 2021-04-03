import React from 'react';
import {Button} from './Button';
import s from "./Counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../bll/store";
import {InitialStateType, setBlockSetupAC, setCounterValueAC} from "../bll/counter-reducer";


const Counter = () =>  {
    const dispatch = useDispatch()
    const state = useSelector<AppRootStateType, InitialStateType>(state => state.state)
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
    const setupButtonHandler = () => dispatch(setBlockSetupAC(!state.setupBlock))

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
                    <div>
                        <Button onClick={setupButtonHandler} disabled={false} buttonTitle={"setup"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter