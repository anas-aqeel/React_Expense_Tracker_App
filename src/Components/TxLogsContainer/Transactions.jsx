import React from 'react';
import './txLogsContainer.css';
import data from '../../transactions.json';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';




const Transactions = () => {
  return (
    <div className='tx_log_div'>
      {[12, 2].map((e) =>
       (
        <>
          <Tx_Item
            title='Market'
            desc='Hi I am Going To Market as a in as a'
            val={100}
            _class='expense'
          />
          <Tx_Item
            title='Salary'
            desc='Hi I am getting my first salary'
            val={1800}
            _class='income'
          />
          <Tx_Item
            title='Vegetables'
            desc='Hi I am Going to buy some vegetables'
            val={233}
            _class='expense'
          /> <Tx_Item
            title='Gift'
            desc='Hi I am having a gift'
            val={1200}
            _class='income'
          />
        </>

      ) 
      )}
    </div>
  )
}



export const Tx_Item = ({ title, desc, val, _class }) => {
  return (
    <div className={_class + ' tx_item'}>
      <div>
        <LocalAtmIcon />
        <p>{title}</p>
      </div>
      <p className='tx_logs_desc'>{desc}</p>
      <p>{val}$</p>
    </div>
  )
}


export default Transactions