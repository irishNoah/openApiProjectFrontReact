// DataGrid.js
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const DataGrid = ({ data }) => {
    return (
        <Grid container spacing={2}>
            {data.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper style={{ padding: '16px', textAlign: 'center' }}>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="body2">{item.description}</Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default DataGrid;
