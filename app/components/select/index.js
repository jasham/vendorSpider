import React from 'react';
import { FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  root: {
    width: 350,
    height: 400,
    backgroundColor: 'rgba(238,238,238,0.8)',
    borderRadius: 10,
    padding: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  margin: {
    width: '100%',
  },
};

const SelectCustom = ({
  classes,
  placeholder,
  options,
  handleChange,
  value,
  multiple,
}) => (
  <FormControl variant="outlined" margin="dense" className={classes.margin}>
    <InputLabel htmlFor="outlined-age-native-simple">{placeholder}</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={value}
      onChange={handleChange}
      label={placeholder}
      multiple={multiple}
    >
      {Array.isArray(options)
        ? options.map((data) => (
            <MenuItem key={data.id} value={data.id}>
              {data.label}
            </MenuItem>
          ))
        : null}
    </Select>
  </FormControl>
);

SelectCustom.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.array,
  handleChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  multiple: PropTypes.bool,
};

export default withStyles(styles)(SelectCustom);
