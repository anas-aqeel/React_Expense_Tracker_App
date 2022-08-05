import React, { useContext } from 'react';
import './txLogsContainer.css';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { MyContext } from '../../Contex/TxContex';





const Transactions = () => {
  let { state } = useContext(MyContext)

  return (
    <div className='tx_log_div'>
      {state.transactions.map((e) =>
      (
        <Tx_Item
          key={e}
          title={e.title}
          desc={e.desc}
          val={e.value}
          time={e.time}
          _class={e.type.toLowerCase()}
        />
      )
      )}
    </div>
  )
}



export const Tx_Item = ({ title, desc, val, _class, time }) => {
  return (
    <div className='tx_item'>
      <div className={_class + ' tx_data'}>
          <div>
            <LocalAtmIcon />
            <p>{title}</p>
          </div>
        <p className='tx_logs_desc'>{desc}</p>
        <p>{val} $</p>
      </div>
      <div className='date_div'>
        <p>
            {
              time.toString().split(' ')[1] + ' ' +
              time.toString().split(' ')[2] + ' ' +
              time.toString().split(' ')[3]
            }
        </p>
        <p>{time.toString().split(' ')[4]}</p>
      </div>
    </div>
  )
}


export default Transactions