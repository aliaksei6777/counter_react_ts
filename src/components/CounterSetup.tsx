import React, {ChangeEvent, useState} from 'react';
import {Buttons} from './Buttons';
import s from "./CounterSetup.module.css"

type CounterSetupPropsType = {
    maxValue: number
    startValue: number
    setCounterValue: (value: number) => void
    setMaxValue: (value: number) => void
    setTextMode: (textMode: boolean) => void
    setStartValue: (startValue: number) => void
}

function CounterSetup(props: CounterSetupPropsType) {
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const onSetHandler = () => {
        props.setMaxValue(props.maxValue)
        props.setCounterValue(props.startValue)
        props.setTextMode(false)
        setButtonDisabled(true)
    }
    const onMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(e.currentTarget.valueAsNumber);
        e.currentTarget.valueAsNumber < 0 || e.currentTarget.valueAsNumber <= props.startValue ?
            setButtonDisabled(true) : setButtonDisabled(false);
        props.setTextMode(true);
    }
    const onStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(e.currentTarget.valueAsNumber);
        e.currentTarget.valueAsNumber < 0 || e.currentTarget.valueAsNumber >= props.maxValue ?
            setButtonDisabled(true) : setButtonDisabled(false);
        props.setTextMode(true);
    }
    const maxValueInputClass = props.maxValue < 0 || props.maxValue <= props.startValue ? s.errorInput : ""
    const startValueInputClass = props.startValue < 0 || props.maxValue <= props.startValue ? s.errorInput : ""

    return (
        <div>
            <div className={s.mainBlock}>
                <div className={s.counterBlock}>
                    <div className={s.valueDisplay}>
                        <span>max value: </span>
                        <input className={maxValueInputClass}
                               value={props.maxValue}
                               type={"number"}
                               onChange={onMaxValueHandler}/>
                    </div>
                    <div className={s.valueDisplay}>
                        <span>start value: </span>
                        <input
                            className={startValueInputClass}
                            value={props.startValue}
                            type={"number"}
                            onChange={onStartValueHandler}/>
                    </div>
                </div>
                <div className={s.buttonBlock}>
                    <Buttons onClick={onSetHandler}
                             buttonTitle={"set"}
                             disabled={buttonDisabled}
                    />
                </div>
            </div>
        </div>
    )
}

export default CounterSetup