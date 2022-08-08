import React, {  useState } from 'react';
import './txLogsContainer.css';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/EditOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Modal } from '@mui/material';
import TxModal from '../Modal/TxModal';




const Transactions = () => {


  return (
    <div className='tx_log_div'>
      {[1, 2].map((e, i) =>
      (
        <>
          <Tx_Item
            key={i}
            _title='Salary'
            _desc='he essential difference between a salary and wages is that a salaried person is paid a fixed amount per pay period and a wage earner is paid by the hour.'
            _val={154}
            time={new Date()}
            _type='Income'
            _class='income'
          />
          <Tx_Item
            key={i}
            _title='Vegetables'
            _desc='Vegetables are parts of plants that are consumed by humans or other animals as food.'
            _val={4}
            time={new Date()}
            _type='Expense'
            _class='expense'
          />
          <Tx_Item
            key={i}
            _title='Office'
            _desc="An office is a space where an organization's employees perform administrative work"
            _val={14}
            time={new Date()}
            _type='Income'
            _class='income'
          />
        </>

      )
      )}
    </div>
  )
}



export const Tx_Item = ({ _title, _desc, _val, _class, time, _type, }) => {
  const [display, setDisplay] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
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