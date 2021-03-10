import React from 'react';
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import Text from '../text';
import Select from '../select';
import DatePicker from '../datePicker';
import TimePicker from '../timePicker';
import Button from '../button';

const styles = {
  root: {
    width: 350,
    backgroundColor: 'rgba(238,238,238,0.95)',
    borderRadius: 10,
    padding: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  margin: {
    width: '100%',
  },
  marginTop: {
    marginTop: 15,
    width: '100%',
  },
  textField: {
    width: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

const Bookings = ({
  classes,
  // servicesPlaceholder,
  categoryData,
  onChangeCategory,
  onChangeServices,
  currentCategory,
  currentService,
  serviceData,
  handleDateChange,
  selectedDate,
  handleTimeChange,
  selectedTime,
  onSubmit,
  onHandelClose,
  closeButton,
  onChangeDescription,
  descValue,
}) => (
  <Box className={classes.root}>
    <Box className={classes.header}>
      <Text variant="h6" fWeight={600} ffamily="Poppins">
        Select Our Services
      </Text>
      {closeButton ? (
        <div>
          <CloseIcon onClick={onHandelClose} />
        </div>
      ) : null}
    </Box>
    <Box>
      <Select
        placeholder="Select Category"
        options={categoryData}
        handleChange={onChangeCategory}
        value={currentCategory}
      />
      <Select
        placeholder="Select Services"
        options={serviceData}
        handleChange={onChangeServices}
        value={currentService}
        multiple
      />
      <DatePicker
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
      <TimePicker
        selectedTime={selectedTime}
        handleTimeChange={handleTimeChange}
      />
      <Box className={classes.marginTop}>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={2}
          variant="outlined"
          className={classes.textField}
          onChange={onChangeDescription}
          value={descValue}
        />
      </Box>
      <Box>
        <Button className={classes.marginTop} onClick={onSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  </Box>
);

Bookings.propTypes = {
  // servicesPlaceholder: PropTypes.string,
  categoryData: PropTypes.array,
  onChangeCategory: PropTypes.func,
  onChangeServices: PropTypes.func,
  currentCategory: PropTypes.string,
  currentService: PropTypes.array,
  serviceData: PropTypes.array,
  selectedDate: PropTypes.string,
  handleDateChange: PropTypes.func,
  selectedTime: PropTypes.string,
  handleTimeChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onHandelClose: PropTypes.func,
  closeButton: PropTypes.bool,
  onChangeDescription: PropTypes.func,
  descValue: PropTypes.string,
};

export default withStyles(styles)(Bookings);
