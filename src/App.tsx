import React from 'react';
import "./App.css"
import Counter from './components/Counter';
import CounterSetup from "./components/CounterSetup";
import {useSelector} from "react-redux";
import {InitialStateType} from "./bll/counter-reducer";
import {AppRootStateType} from "./bll/store";

function App() {
    const state = useSelector<AppRootStateType, InitialStateType>(state => state.state)

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


