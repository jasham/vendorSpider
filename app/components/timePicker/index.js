import React from 'react';
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import {
  withStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
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

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: green[600],
    },
  },
});

const CustomTimePicker = ({ classes, selectedTime, handleTimeChange }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <ThemeProvider theme={defaultMaterialTheme}>
          <KeyboardTimePicker
            margin="normal"
            className={classes.dateStyle}
            margin="normal"
            id="time-picker"
            label="Select Time"
            value={selectedTime}
            onChange={handleTimeChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </ThemeProvider>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

CustomTimePicker.protoTypes = {
  handleTimeChange: PropTypes.func,
  selectedTime: PropTypes.string,
  // eslint-disable-next-line react/forb,id-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomTimePicker);
