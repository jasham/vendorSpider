import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    fontFamily: (props) => props.ffamily,
    color: (props) => props.color,
    fontWeight: (props) => props.fWeight,
    lineHeight: (props) => props.lineHeight,
    '&:hover': {
      color: (props) => props.hoverColor,
    },
  },
});

const Text = ({
  children,
  variant,
  component,
  fWeight,
  color,
  fSize,
  lineHeight,
  ffamily,
  className,
}) => {
  const props = { fWeight, color, fSize, lineHeight, ffamily };
  const classes = useStyles(props);
  return (
    <Typography
      className={clsx(classes.root, className)}
      variant={variant}
      component={component}
      gutterBottom
    >
      {children}
    </Typography>
  );
};

Text.propTypes = {
  variant: PropTypes.string,
  component: PropTypes.string,
  fWeight: PropTypes.number,
  color: PropTypes.string,
  fSize: PropTypes.string,
  lineHeight: PropTypes.number,
  ffamily: PropTypes.string,
};

export default Text;
