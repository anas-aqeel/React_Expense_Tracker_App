import React, { useState, useContext } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { MyContext } from '../Contex/TxContex'
import { Box, Modal, Fab, TextField, Button, MenuItem } from '@mui/material';

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  boxShadow: 'rgba(100, 100, 111, 0.3) 0px 4px 29px 0px',
  p: 2,
};

export default function AddTransaction() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <TxModal />
      </Modal>
    </div>

  );
}

const TxModal = () => {
  const { dispatch } = useContext(MyContext);
  const [title, setTitle] = useState([false, '']);
  const [desc, setDesc] = useState([false, '']);
  const [value, setValue] = useState([false, 0]);
  const [type, setType] = useState([false, '']);

  const handleSumbit = () => {

    if (title[1] == '') setTitle([true, '']);
    else if (desc[1] == '') setDesc([true, '']);
    else if (value[1] == 0) setValue([true, 0]);
    else if (type[1] == '') setType([true, '']);

    else if (!title[0] && !desc[0] && !value[0] && !type[0]) {
      dispatch(
        {
          type: 'ADD_TRANSACTION',
          payload: {
            title: title[1],
            desc: desc[1],
            value: value[1],
            type: type[1]
          }
        })
    }
  }

  return (
    <Box sx={style}>
      <p
        style={{
          color: 'rgb(52,52,52)',
          textAlign: 'center',
          fontFamily: "Roboto, sans-serif",
          fontWeight: ' bold',
          fontSize: '23px'
        }}
      >Add New Transaction</p>

      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '15px'
        }}>
        <TextField
          error={title[0]}

          required={true}
          size="small"
          id="outlined-basic"
          label="Title"
          
          variant="outlined"
          onChange={(e) => setTitle([e.target.value == '', e.target.value])}
        />
        <TextField
          error={value[0]}
          required={true}
          size="small"
          id="outlined-basic"
          type={'number'}
          label="Value"
          variant="outlined"
          onChange={(e) => setValue([e.target.value == 0, parseInt(e.target.value)])}
        />
      </Box>
      <TextField fullWidth={true}
        size="small"
        style={{ marginBottom: '15px' }}
        id="outlined-basic"
        label="Description"
        variant="outlined"
        onChange={(e) => setDesc([e.target.value == '', e.target.value])}
        error={desc[0]}
        required={true}
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        SelectProps={type}
        fullWidth={true}
        value={type[1]}
        error={type[0]}
        required={true}
        onChange={(e) => setType([(e.target.value == ''), e.target.value])}
        helperText="Please select your transaction type"
      >
        <MenuItem
          //  onClick={()=>setType('Income')}
          style={{
            fontSize: '15px',
            fontWeight: 'bold',
            color: 'rgb(0, 100, 0)',
            border: '1px solid green'

          }}
          value='Income'>Income</MenuItem>
        <MenuItem
          style={{
            fontSize: '15px',
            fontWeight: 'bold',
            color: 'rgb(129, 2, 2)',
            border: '1px solid red'
          }}
          value='Expense'>Expense</MenuItem>

      </TextField>

      <Button
        onClick={handleSumbit}
        style={{
          marginTop: '15px',
          color: 'red',
          border: '1px solid red'
        }} fullWidth={true} variant="outlined" size="medium">
        Add
      </Button>
    </Box>
  )
}

