import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Data } from '../redux/data/action';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


interface dataProps {
    data : Data[]
}




export default function BasicTable(props:dataProps) {
  const classes = useStyles();
  return (

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Asset/Contract name</TableCell>
            <TableCell align="right">Bid </TableCell>
            <TableCell align="right">Ask</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Underlying Asset</TableCell>
            <TableCell align="right">Volume in USD for last 24 hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data?.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.bid}</TableCell>
              <TableCell align="right">{row.ask}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.underlying}</TableCell>
              <TableCell align="right">{row.volumeUsd24h}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
