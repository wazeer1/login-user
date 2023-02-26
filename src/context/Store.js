import Reducer from "./Reducer";
import React, { createContext, useReducer } from "react";

const initialState = {
    userData: {
        isVerified: false,
        access: "",
        name:""
    },
};

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export const Context = createContext(initialState);

export default Store;
