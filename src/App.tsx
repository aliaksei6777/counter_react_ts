import React, {useEffect, useReducer} from 'react';
import "./App.css"
import Counter from './components/Counter';
import CounterSetup from "./components/CounterSetup";
import {reducer, setCounterValueAC, setMaxValueAC, setStartValueAC} from "./counter-reducer";

export type StateRootType = {
    counterValue: number
    maxValue: number
    startValue: number
    textMode: boolean
    buttonDisable: boolean
}

function App() {

    const [state, dispatch] = useReducer(reducer, {
        counterValue: 0,
        maxValue: 5,
        startValue: 0,
        textMode: false,
        buttonDisable: true
    })

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString)
            // setCounterValue(newValue)
            dispatch(setCounterValueAC(newValue))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValue',JSON.stringify(state.counterValue))
    }, [state.counterValue])
    useEffect(() => {
        let valueAsString = localStorage.getItem('maxValue')
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString)
            dispatch(setMaxValueAC(newValue))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('maxValue',JSON.stringify(state.maxValue))
    }, [state.maxValue])
    useEffect(() => {
        let valueAsString = localStorage.getItem('startValue')
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString)
            dispatch(setStartValueAC(newValue))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('startValue',JSON.stringify(state.startValue))
    }, [state.startValue])

    return (
        <div>
            <div className={"App"}>
                <CounterSetup
                    state={state}
                    dispatch={dispatch}/>
                <Counter
                    state={state}
                    dispatch={dispatch}/>
            </div>
        </div>
    );
}

export default App;


