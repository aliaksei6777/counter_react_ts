import React from 'react';
import "./App.css"
import Counter from './components/Counter';
import CounterSetup from "./components/CounterSetup";
import {useSelector} from "react-redux";
import {InitialStateType} from "./bll/counter-reducer";
import {AppRootStateType} from "./bll/store";

function App() {
    const state = useSelector<AppRootStateType, InitialStateType>(state => state.state)

    // useEffect(() => {
    //     let counterValueAsString = localStorage.getItem('counterValue')
    //     if (counterValueAsString) {
    //         dispatch(setCounterValueAC(JSON.parse(counterValueAsString)))}
    //     let maxValueAsString = localStorage.getItem('maxValue')
    //     if (maxValueAsString) {
    //         dispatch(setMaxValueAC(JSON.parse(maxValueAsString)))}
    //     let startValueAsString = localStorage.getItem('startValue')
    //     if (startValueAsString) {
    //         dispatch(setStartValueAC(JSON.parse(startValueAsString)))}
    //     let textModeAsString = localStorage.getItem('textMode')
    //     if (textModeAsString) {
    //         dispatch(setTextModeAC(JSON.parse(textModeAsString)))}
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify(state.counterValue))
    //     localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
    //     localStorage.setItem('startValue', JSON.stringify(state.startValue))
    //     localStorage.setItem('textMode', JSON.stringify(state.textMode))
    // }, [state.counterValue, state.maxValue,
    //     state.startValue, state.textMode])

    return (
        <div className={"App"}>
            <div>
                <Counter/>
            </div>
            <div>
                <div>
                    {state.setupBlock && <CounterSetup/>}
                </div>
            </div>
        </div>
    );
}

export default App;


