import React, { useRef } from 'react';
import { arrayOf, func, bool, string, shape } from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import Text from '../text';

const DropDown = ({
  className,
  label,
  selectedValue,
  onChange,
  options,
  error,
  helperText,
  placeholder,
  disabled,
}) => {
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const onChangeValue = (event) => {
    event.preventDefault();
    onChange &&
      onChange(options.find((item) => item.value === event.target.value));
  };
  return (
    <FormControl
      size="small"
      error={error}
      disabled={disabled}
      className={className}
      variant="outlined"
    >
      <InputLabel ref={inputLabel}>{label}</InputLabel>
      <Select
        labelWidth={labelWidth}
        id={`id-${label}`}
        variant="outlined"
        value={selectedValue.value || 'none'}
        onChange={onChangeValue}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
          getContentAnchorEl: null,
        }}
        inputProps={{
          name: label,
          id: label,
        }}
      >
        <MenuItem value="none" disabled>
          {placeholder || 'Select Value'}
        </MenuItem>
        {options &&
          options.map((data, idx) => (
            <MenuItem value={data.value} key={idx.toString()}>
              {data.label}
            </MenuItem>
          ))}
      </Select>
      {error && (
        <FormHelperText>
          <Text color="red">{helperText}</Text>
        </FormHelperText>
      )}
    </FormControl>
  );
};
DropDown.defaultProps = {
  selectedValue: {
    value: '',
    label: '',
  },
  options: [],
  onChange: null,
  disabled: false,
  error: false,
};
DropDown.propTypes = {
  options: arrayOf(
    shape({
      value: string,
      label: string,
    }),
  ),
  onChange: func,
  error: bool,
  disabled: bool,
  label: string,
  helperText: string,
  placeholder: string,
  selectedValue: shape({
    value: string,
    label: string,
  }),
};
export default DropDown;
