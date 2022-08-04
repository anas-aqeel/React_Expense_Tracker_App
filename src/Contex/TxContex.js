import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";


let initialState = {
  transactions: [],
  income: 0,
  expense: 0
};
export let MyContext = createContext(initialState);


const GlobalContext = ({ children }) => {

  let [state, dispatch] = useReducer(AppReducer, initialState)
  function AddTransaction(tx) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: tx
    })
  }

  return (
    <MyContext.Provider
      value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  )
}

export default GlobalContext