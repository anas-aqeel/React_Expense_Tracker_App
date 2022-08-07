import React, { useState, useContext } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { MyContext } from '../Contex/TxContex'
import { Modal, Fab } from '@mui/material';
import { AddTxItem } from '../firebase/utils';
import TxModal from './Modal/TxModal'

let handleClose;


export default function AddTransaction() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  handleClose = () => setOpen(false);
  const { dispatch } = useContext(MyContext);
  const [title, setTitle] = useState({ error: false, value: '' });
  const [desc, setDesc] = useState({ error: false, value: '' });
  const [value, setValue] = useState({ error: false, value: 0 });
  const [type, setType] = useState({ error: false, value: '' });

  const handleSumbit = () => {

    if (title.value == '') setTitle({ error: true, value: '' });
    else if (desc.value == '') setDesc({ error: true, value: '' });
    else if (value.value == 0) setValue({ error: true, value: 0 });
    else if (type.value == '') setType({ error: true, value: '' });

    else if (!title.error && !desc.error && !value.error && !type.error) {
      dispatch(
        {
          type: 'ADD_TRANSACTION',
          payload: {
            title: title.value,
            desc: desc.value,
            value: value.value,
            time: new Date(),
            type: type.value
          }
        })
      AddTxItem(title.value, desc.value, value.value, new Date(), type.value)
      handleClose()
      setTitle({ error: false, value: '' });
      setDesc({ error: false, value: '' });
      setValue({ error: false, value: 0 });
      setType({ error: false, value: '' });
    }
  }

  return (
    <div>
      <Fab
        onClick={handleOpen}
        style={{
          'backgroundColor': 'black',
          'color': 'red',
          'position': 'absolute',
          'bottom': '30px',
          'right': '30px',
          'cursor': 'pointer',
          'boxShadow': 'rgba(100, 100, 111, 0.2) 0px 2px 29px 0px'
        }} color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Modal
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
          handleSumbit={handleSumbit}
        />
      </Modal>
    </div>

  );
}

