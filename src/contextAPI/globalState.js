import React, { createContext, useReducer } from "react";
import { EnquiryProduct } from "./globalReducer";

const initialState = {
    enquiryProductList: [],
    searchProductsList:[]
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(EnquiryProduct, initialState)

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}