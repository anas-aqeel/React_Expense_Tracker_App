import React, {useContext} from 'react';
import './txLogsContainer.css';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { MyContext } from '../../Contex/TxContex';





const Transactions = () => {
  let {transactions} = useContext(MyContext)
  // console.log(transactions)
  return (
    <div className='tx_log_div'>
      {transactions.map((e) =>
       (
          <Tx_Item
            key={1}
            title={e.title}
            desc={e.desc}
            val={e.value}
            _class={e.type.toLowerCase()}
          />
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