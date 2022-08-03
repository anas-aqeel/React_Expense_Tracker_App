import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TxContainer from '../TxContainer/TxContainer';
import TransactionLogsContainer from '../TxLogsContainer/TxLogsContainer';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Container = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={8}>
                <TxContainer />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TransactionLogsContainer/>
            </Grid>
        </Grid>
    )
}

export default Container