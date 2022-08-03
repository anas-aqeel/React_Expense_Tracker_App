import React from 'react'
import Bars from './Bars';
import Graphs from '../Graphs/Graphs';
import './txContainer.css'
const TxContainer = () => {
  return (

    <div className='tx_container'>
      <div className="bar_container">
        <Bars title='Expense' value='200$' cls='expense' />
        <Bars title='Income' value='234$' cls='income' />
        <Bars title='Balance' value='34$' cls='balance' />
      </div>
    <Graphs/>
    </div>
  )
}

export default TxContainer