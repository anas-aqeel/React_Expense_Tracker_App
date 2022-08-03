import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
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
  const [type, setType] = React.useState('Income');
  return (
    <Box sx={style}>
      <p
      style={{ 
        color: 'rgb(52,52,52)',
        textAlign: 'center',
        fontFamily: "Roboto, sans-serif",
        fontWeight:' bold',
        fontSize: '23px'
      }}      
      >Add New Transaction</p>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '15px'
        }}>
        <TextField size="small" id="outlined-basic" label="Name" variant="outlined" />
        <TextField size="small" id="outlined-basic" type={'number'} label="Value" variant="outlined" />
      </Box>


      <TextField fullWidth={true}
        size="small"
        style={{ marginBottom: '15px' }}
        id="outlined-basic"
        label="Description"
        variant="outlined"
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        fullWidth={true}
        value={type}
        onChange={(e) => setType(e)}
        helperText="Please select your transaction type"
      >
        <MenuItem
          style={{
            fontSize: '15px',
            fontWeight: 'bold',
            color: 'rgb(0, 100, 0)'
          }}
          value='Income'>Income</MenuItem>
        <MenuItem
          style={{
            fontSize: '15px',
            fontWeight: 'bold',
            color: 'rgb(129, 2, 2)',
            border: '1px solid black'
          }}
          value='Expense'>'Expense'</MenuItem>
      </TextField>

      <Button
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

