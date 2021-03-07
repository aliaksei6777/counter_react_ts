import React, {useEffect, useState} from 'react';
import "./App.css"
import Counter from './components/Counter';
import CounterSetup from "./components/CounterSetup";



function App() {

    const [counterValue, setCounterValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [textMode,setTextMode] = useState<boolean>(false)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCounterValue(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValue',JSON.stringify(counterValue))
    }, [counterValue])

    useEffect(() => {
        let valueAsString = localStorage.getItem('maxValue')
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxValue(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('maxValue',JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        let valueAsString = localStorage.getItem('startValue')
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setStartValue(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('startValue',JSON.stringify(startValue))
    }, [startValue])

    const onIncClickHandler = () => setCounterValue(counterValue + 1)
    const onResetClickHandler = () => setCounterValue(startValue)

    return (
        <div>
            <div className={"App"}>
                <CounterSetup
                    maxValue={maxValue}
                    startValue={startValue}
                    setCounterValue={setCounterValue}
                    setMaxValue={setMaxValue}
                    setTextMode={setTextMode}
                    setStartValue={setStartValue}
                />
                <Counter
                    counterValue={counterValue}
                    maxValue={maxValue}
                    startValue={startValue}
                    onIncClickHandler={onIncClickHandler}
                    onResetClickHandler={onResetClickHandler}
                    textMode={textMode}
                />
            </div>
            <div>
            </div>
        </div>
    );
}

export default App;


