import React, {useContext} from 'react'
import Bars from './Bars';
import './txContainer.css'
import Graphs from '../Graphs/Graphs';
import {MyContext} from '../../Contex/TxContex';
const TxContainer = () => {
  const {state} = useContext(MyContext);
  let balance = state.income - state.expense;
  console.log(balance)
  return (

    <div className='tx_container'>
      <div className="bar_container">
        <Bars title='Expense' value={state.expense} cls='expense' />
        <Bars title='Income' value={state.income} cls='income' />
        <Bars title='Balance' value={balance} cls='balance' />
      </div>
    <Graphs/>
    </div>
  )
}

export default TxContainer