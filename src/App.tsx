import React, {useEffect, useReducer} from 'react';
import "./App.css"
import Counter from './components/Counter';
import CounterSetup from "./components/CounterSetup";
import {reducer, setBlockSetupAC, setCounterValueAC, setMaxValueAC, setStartValueAC} from "./counter-reducer";
import {Button} from "./components/Button";

export type StateType = {
    counterValue: number
    maxValue: number
    startValue: number
    textMode: boolean
    buttonDisable: boolean
    setupBlock: boolean
}

function App() {

    const [state, dispatch] = useReducer(reducer, {
        counterValue: 0,
        maxValue: 5,
        startValue: 0,
        textMode: false,
        buttonDisable: true,
        setupBlock: false
    })

    useEffect(() => {
        let counterValueAsString = localStorage.getItem('counterValue')
        if (counterValueAsString) {
            dispatch(setCounterValueAC(JSON.parse(counterValueAsString)))
        }
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            dispatch(setMaxValueAC(JSON.parse(maxValueAsString)))
        }
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            dispatch(setStartValueAC(JSON.parse(startValueAsString)))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(state.counterValue))
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
        localStorage.setItem('startValue', JSON.stringify(state.startValue))
    }, [state.counterValue, state.maxValue, state.startValue])

    const setupButtonHandler = () => dispatch(setBlockSetupAC(!state.setupBlock))

    return (
        <div className={"App"}>
            <div>
                <Counter state={state} dispatch={dispatch} setupButtonHandler={setupButtonHandler}/>
            </div>
            <div>
                <div>
                    {state.setupBlock && <CounterSetup state={state} dispatch={dispatch}/>}
                </div>
            </div>
        </div>
    );
}

export default App;


