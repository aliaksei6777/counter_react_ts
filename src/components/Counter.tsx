import React from 'react';
import {Buttons} from './Buttons';
import s from "./Counter.module.css"
type CounterPropsType = {
    maxValue: number
    counterValue: number
    startValue: number
    onIncClickHandler:() => void
    onResetClickHandler:() => void
    textMode: boolean
}

function Counter(props: CounterPropsType) {

    const counterBlockClass = `${s.counterBlock} ${props.counterValue === props.maxValue ? s.red : ""}`
    const textInfoClass = `${props.startValue < 0 || props.maxValue < 0 || props.maxValue <= props.startValue ? s.red : ""}`
    let textInfo = ""
    if (props.startValue < 0 || props.maxValue < 0 || props.maxValue <= props.startValue) {
        textInfo = "Incorrect value!"
    } else {textInfo = "enter values and press \'set\'"}


    return (
        <div>
            <div className={s.mainBlock}>
                <div className={props.textMode ? s.textMode : counterBlockClass}>
                    {props.textMode ? <span className={textInfoClass}>{textInfo}</span> :
                    <span>{props.counterValue}</span>}
                </div>
                <div className={s.buttonBlock}>
                    <Buttons onClick={props.onIncClickHandler}
                             buttonTitle={"inc"}
                             disabled={props.counterValue === props.maxValue || props.textMode}
                    />
                    <Buttons onClick={props.onResetClickHandler}
                             buttonTitle={"reset"}
                             disabled={props.counterValue === props.startValue || props.textMode}
                    />
                </div>
            </div>
        </div>
    )
}

export default Counter