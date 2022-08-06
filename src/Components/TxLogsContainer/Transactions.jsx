import React, { useContext, useEffect, useState } from 'react';
import './txLogsContainer.css';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { MyContext } from '../../Contex/TxContex';
import { get, child, getDatabase, ref } from 'firebase/database';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/EditOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { DeleteTxItem } from '../../firebase/utils';




const Transactions = () => {

  let { state, dispatch } = useContext(MyContext)
  useEffect(() => {
    async function getData() {

      const dbRef = ref(getDatabase());
      let data = await get(child(dbRef, `transactions/`))
      data = data.val();
      if (data) {
        let transactions = []
        Object.keys(data).map((e) => {
          transactions.push(data[e])

        });
        transactions.map((e) => {
          dispatch({
            type: 'ADD_TRANSACTION',
            payload: { ...e, time: new Date(e.time) }
          })
        })
      }
    }
    getData()


  }, [])

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
          id={e.id}
          type={e.type}
          _class={e.type.toLowerCase()}
        />
      )
      )}
    </div>
  )
}



export const Tx_Item = ({ title, desc, val, _class, time, id , type}) => {
  let {  dispatch } = useContext(MyContext)
  const [display, setDisplay] = useState(false);
  return (
    <div className='tx_item'>
      <button onClick={() => setDisplay(!display)} className='action-button'>
        <MoreHorizOutlinedIcon fontSize='small' color='warning' />
      </button>
      <div className={display ? 'actions visible' : 'actions hide'}>
        <button className='action_item update'>
          <EditOutlinedIcon fontSize='small' />
          <p>Edit</p>
        </button>
        <button onClick={
          () => {
            setDisplay(false)
            DeleteTxItem(id)
            dispatch({
              type: "DELETE_TRANSACTION",
              payload:{id,type,value:val}
            })
          }}
          className='action_item delete'>
          <DeleteOutlineOutlinedIcon fontSize='small' />
          <p>Delete</p>
        </button>
      </div>
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