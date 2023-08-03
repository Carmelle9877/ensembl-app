import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react'


export default function GenomicsTable(props) {
    const [rows, setRows] = useState([]);
    const [cols, setCols] = useState([]);

    console.log(props.rows, props.cols)

    return (
        <div>
            <DataGrid
                rows={props.rows}
                columns = {props.cols}
                checkboxSelection
            
            />
        </div>
        
    )
}