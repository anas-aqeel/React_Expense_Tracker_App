import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './navbar.css'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
    <AppBar position="static"className='navBar' color='default'>
      <Toolbar variant="dense">
        <Typography className='heading' variant="h6" color="black" component="div">
          Expense Tracker App
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar