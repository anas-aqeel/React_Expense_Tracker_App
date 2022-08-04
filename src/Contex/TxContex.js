import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";


let initialState = [];
export let MyContext = createContext(initialState);


const GlobalContext = ({children}) => {

let [state, dispatch] = useReducer(AppReducer, [])

function AddTransaction(tx) {
  dispatch({
    type: 'ADD_TRANSACTION',
    payload: tx
  })
}
  return (
    <MyContext.Provider 
    value={{
      transactions:  state, 
      AddTransaction
      }}>
        {children}
    </MyContext.Provider>
  )
}


export default GlobalContext