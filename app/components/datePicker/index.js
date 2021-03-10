import React from 'react';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';

const styles = {
  root: {},
  dateStyle: {
    width: '100%',
    fontFamily: 'Poppins',
  },
};

const CustomDatePicker = ({ classes, selectedDate, handleDateChange }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Grid container justify="space-around">
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label="Select Date"
        format="MM/dd/yyyy"
        className={classes.dateStyle}
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </Grid>
  </MuiPickersUtilsProvider>
);

CustomDatePicker.protoTypes = {
  selectedDate: PropTypes.string,
  handleDateChange: PropTypes.func,
};

export default withStyles(styles)(CustomDatePicker);
