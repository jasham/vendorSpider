import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DropDown from '../../../components/dropdown';
import OrderCard from './order-card';

const useStyles = makeStyles(() => ({
  dropdown: {
    width: '35%',
  },
}));

const OrderTab = () => {
  const [val, setVal] = useState();
  const classes = useStyles();
  return (
    <>
      <Box display="flex" justifyContent="flex-end">
        <DropDown
          label="Order Status"
          options={['Accept', 'Inprocess', 'Completed', 'Dispute'].map(
            (item) => ({
              label: item,
              value: item,
            }),
          )}
          onChange={(vals) => setVal(vals)}
          selectedValue={val}
          className={classes.dropdown}
        />
      </Box>
      <OrderCard />
    </>
  );
};

export default OrderTab;
