import React, { useContext, useEffect, useState } from 'react';
import './txLogsContainer.css';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { MyContext } from '../../Contex/TxContex';
import { get, child, getDatabase, ref } from 'firebase/database';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/EditOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { DeleteTxItem, UpdateTxItem } from '../../firebase/utils';
import { Modal } from '@mui/material';
import TxModal from '../Modal/TxModal';




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
      {state.transactions.map((e, i) =>
      (
        <Tx_Item
          key={i}
          _title={e.title}
          _desc={e.desc}
          _val={e.value}
          time={e.time}
          id={e.id}
          index={i}
          _type={e.type}
          _class={e.type.toLowerCase()}
        />
      )
      )}
    </div>
  )
}



export const Tx_Item = ({ _title, _desc, _val, _class, time, id, _type, index }) => {
  let _id = id;
  // console.log({ _title, _desc, _val, _class, time, id, _type, index })
  let { dispatch } = useContext(MyContext)
  const [display, setDisplay] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState({ error: false, value: _title });
  const [desc, setDesc] = useState({ error: false, value: _desc });
  const [value, setValue] = useState({ error: false, value: _val });
  const [type, setType] = useState({ error: false, value: _type });
  const handleSumbit = () => {
    if (title.value == '') setTitle({ error: true, value: '' });
    else if (desc.value == '') setDesc({ error: true, value: '' });
    else if (value.value == 0) setValue({ error: true, value: 0 });
    else if (type.value == '') setType({ error: true, value: '' });
    else if (!title.error && !desc.error && !value.error && !type.error) {

      dispatch(
        {
          type: 'UPDATE_TRANSACTION',
          index,
          payload: {
            title: title.value,
            desc: desc.value,
            value: value.value,
            time,
            type: type.value,
          }
        })
      UpdateTxItem(_id, title.value, desc.value, value.value, time, type.value)
      handleClose()

    }
  }


  return (
    <div className='tx_item'>
      <button key={1} onClick={() => {
        setDisplay(!display)
      }
      } className='action-button'>
        <MoreHorizOutlinedIcon fontSize='small' color='warning' />
      </button>

      <div key={2} className={display ? 'actions visible' : 'actions hide'}>
        <button onClick={() => {
          handleOpen()
          setDisplay(false)
        }} className='action_item update'>
          <EditOutlinedIcon fontSize='small' />
          <p>Edit</p>
        </button>
        <button onClick={() => {
          setDisplay(false)
          DeleteTxItem(id)
          dispatch({
            type: "DELETE_TRANSACTION",
            payload: { id, type: type.value, value: value.value }
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
          <p>{_title}</p>
        </div>
        <p className='tx_logs_desc'>{_desc}</p>
        <p >{_val} $</p>
      </div>

      <div key={4} className='date_div'>
        <p>
          {
            time.toString().split(' ')[1] + ' ' +
            time.toString().split(' ')[2] + ' ' +
            time.toString().split(' ')[3]
          }
        </p>
        <p>{time.toString().split(' ')[4]}</p>
      </div>

      <Modal key={5}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TxModal
          title={title}
          setTitle={setTitle}
          desc={desc}
          setDesc={setDesc}
          value={value}
          setValue={setValue}
          type={type}
          setType={setType}
          handleSumbit={() => {
            handleSumbit()
          }}
        />
      </Modal>
    </div>

  )
}



export default Transactions