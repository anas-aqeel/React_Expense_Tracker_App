import React from 'react'
import Transactions from './Transactions'
import './txLogsContainer.css'

const TransactionLogsContainer = () => {
  return (
    <div className='tx_logs_div'>
      <h1 className='logs_heading'>Transactions Logs</h1>
      <Transactions/>
    </div>
  )
}

export default TransactionLogsContainer