import React from 'react'
import Bars from './Bars';
import './txContainer.css'
import Graphs from '../Graphs/Graphs';
const TxContainer = () => {

  return (

    <div className='tx_container'>
      <div className="bar_container">
        <Bars title='Expense' value={23} cls='expense' />
        <Bars title='Income' value={543} cls='income' />
        <Bars title='Balance' value={520} cls='balance' />
      </div>
    <Graphs/>
    </div>
  )
}

export default TxContainer