import React, {useState} from 'react';
import "./App.css"
import Counter from './components/Counter';
import CounterSetup from "./components/CounterSetup";



function App() {

    const [counterValue, setCounterValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [textMode,setTextMode] = useState<boolean>(false)

    const onIncClickHandler = () => setCounterValue(counterValue + 1)
    const onResetClickHandler = () => setCounterValue(0)

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


