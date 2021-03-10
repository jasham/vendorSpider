import { Button } from '@material-ui/core';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { bool, func, oneOf, string } from 'prop-types';

const buttonColor = {
  green: '#34A76C',
  white: '#ffffff',
  disabled: '#98979a',
};

const UnStyleButton = withStyles((theme) => ({
  root: (props) => ({
    fontFamily: 'Poppins',
    borderRadius: '5px',
    // fontSize: '12px',
    backgroundColor:
      props.backgroundcolor === 'green' ? buttonColor.green : buttonColor.white,
    color:
      props.backgroundcolor === 'green' ? buttonColor.white : buttonColor.green,
    textTransform: 'unset',
    fontWeight: 'normal',
    '&:hover': {
      backgroundColor:
        props.backgroundcolor === 'green'
          ? buttonColor.green
          : buttonColor.white,
    },
    '&:disabled': {
      color: buttonColor.white,
      backgroundColor: buttonColor.disabled,
    },
    [theme.breakpoints.down('md')]: {
      width: 76,
    },
  }),
}))(Button);

const Buttons = ({
  children,
  className,
  disabled,
  onClick,
  backgroundcolor,
  size,
  variant,
}) => (
  <UnStyleButton
    className={className}
    disabled={disabled}
    onClick={onClick}
    backgroundcolor={backgroundcolor}
    variant={variant}
    size={size}
  >
    {children}
  </UnStyleButton>
);
Buttons.defaultProps = {
  backgroundcolor: 'green',
  disabled: false,
  size: 'medium',
};
Buttons.propTypes = {
  disabled: bool,
  onClick: func,
  backgroundcolor: oneOf(['green', 'white', 'transparent']),
  size: oneOf(['medium', 'small', 'large']),
  variant: string,
};

export default Buttons;
