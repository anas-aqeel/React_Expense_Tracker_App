import { Box, TextField, Button, MenuItem } from '@mui/material';

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

const TxModal = (
  { title, setTitle,
    desc, setDesc,
    value, setValue,
    type, setType,
    handleSumbit }
) => {


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
          error={title.error}
          required={true}
          value={title.value}
          size="small"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={(e) => setTitle({
            error: e.target.value == '' || e.target.value.split('').length > 15,
            value: e.target.value
          })}
        />
        <TextField
          error={value.error}
          required={true}
          size="small"
          id="outlined-basic"
          type={'number'}
          value={value.value}
          label="Value"
          variant="outlined"
          onChange={(e) => setValue({
            error: (e.target.value == 0 || e.target.value > 9999999),
            value: parseInt(e.target.value)
          })}
        />
      </Box>
      <TextField fullWidth={true}
        size="small"
        style={{ marginBottom: '15px' }}
        id="outlined-basic"
        label="Description"
        variant="outlined"
        value={desc.value}
        onChange={(e) => setDesc({
          error: e.target.value == '' || e.target.value.split('').length > 170,
          value: e.target.value
        })}
        error={desc.error}
        required={true}
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        SelectProps={type}
        fullWidth={true}
        value={type.value}
        error={type.error}
        required={true}
        onChange={(e) => setType({ error: (e.target.value == ''), value: e.target.value })}
        helperText="Please select your transaction type"
      >
        <MenuItem
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
        onClick={() => handleSumbit()}
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

export default TxModal