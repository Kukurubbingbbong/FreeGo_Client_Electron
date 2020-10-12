import { initState, Reducer } from "../Reducer/Reducer";
import React, { useContext } from 'react';
const { createContext, useReducer } = require("react");

const FreegoStateContext = createContext(undefined);
const FreegoDispatchContext = createContext(undefined);

export const DataProvider = ({children}) => {
    const [state, redux] = useReducer(Reducer, initState);
    
    return(
        <FreegoStateContext.Provider value={state}>
            <FreegoDispatchContext.Provider value={redux}>
                {children}
            </FreegoDispatchContext.Provider>          
        </FreegoStateContext.Provider>
    )
}


export function UseFreegoState() {
    const state = useContext(FreegoStateContext)
    if(!state) throw new Error("FreegoState Not Found");
    return state;
}

export function UseFreegoDispatch() {
    const dispatch = useContext(FreegoDispatchContext)
    if(!dispatch) throw new Error("FreegoDispatch Not Found");
    return dispatch;
}

