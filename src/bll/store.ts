import {combineReducers, createStore} from "redux";
import {reducer} from "./counter-reducer";

const rootReducer = combineReducers({
    state: reducer
})

let preloadedState;
const persistedTodostring = localStorage.getItem('app-state')
if (persistedTodostring) {
    preloadedState = JSON.parse(persistedTodostring)
}

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,preloadedState)

store.subscribe(() => {
    localStorage.setItem('app-state',JSON.stringify(store.getState()))
})