import React from 'react'
import './txContainer.css'
import Bars from './Bars';
const TxContainer = () => {
  return (

    <div className='tx_container'>
      <div className="bar_container">
        <Bars title='Expense' value='200$' cls='expense' />
        <Bars title='Income' value='234$' cls='income' />
        <Bars title='Balance' value='34$' cls='balance' />
      </div>
    </div>
  )
}

export default TxContainer