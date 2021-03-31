import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import { array, func } from 'prop-types';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { GlobalContext } from '../../../pages/_app';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

const BasicTable = ({ tableData, delRet, toggleStatus }) => {
  const classes = useStyles();
  const globalContext = useContext(GlobalContext);

  const returnDel = (id, index) => {
    delRet(id, index);
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Services</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {globalContext.state.groupName[row.group_id]}
              </TableCell>
              <TableCell align="right">
                <Switch
                  color="primary"
                  checked={row.active}
                  onChange={() => toggleStatus(index, row.active)}
                />
              </TableCell>
              <TableCell align="right">
                <IconButton onClick={() => returnDel(row, index)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

BasicTable.propTypes = {
  tableData: array,
  delRet: func,
  toggleStatus: func,
};

export default BasicTable;
