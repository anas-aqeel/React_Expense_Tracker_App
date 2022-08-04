import React from 'react'
import Grid from '@mui/material/Grid';
import TxContainer from '../TxContainer/TxContainer';
import TransactionLogsContainer from '../TxLogsContainer/TxLogsContainer';



const Container = () => {
    return (
        <Grid style={{marginBottom:"38px"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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