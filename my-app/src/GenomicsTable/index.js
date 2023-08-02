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

export default function GenomicsTable(props) {
    console.log("rows and columsn", props.rows, props.cols)
    props.cols.map((i) => {
        console.log("cols", i)
    })
    props.rows.map((i) => {
        console.log("rows", i)
    })

    return(
       <TableContainer component = {Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {props.cols.map((i) => {
                            {console.log("hello")}
                            <TableCell>{i}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key="0">
                        {props.rows.map((i) => {
                            <TableCell>{i}</TableCell>
                        }) }
                    </TableRow>
                </TableBody>
            </Table>
       </TableContainer>
    )
}