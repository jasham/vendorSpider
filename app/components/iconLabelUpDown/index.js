import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import Text from '../text';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#34a76c',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  middle: {
    height: 77,
    width: 80,
    borderRadius: '50%',
    border: '2px solid #FFFFFF',
    marginBottom: 10,
    backgroundColor: (props) => props.bgColor,
  },
  iconStyle: {
    backgroundImage: (props) => `url(${props.bigIcon})`,
    backgroundSize: '70%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '85%',
  },
  uText: {
    textAlign: 'center',
    display: 'flex',
    lineHeight: 1,
  },
  smallIcon: {
    backgroundImage: (props) => `url(${props.smallIcon})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 40,
    width: 40,
    marginBottom: 10,
  },
  smallTextWidth: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
  },
  textCenter: {
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
    textAlign: 'center',
    lineHeight: 1,
  },
  textCenterWidth: {
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
  },
};

const IconLabelUpDown = ({ upperText, lowerText, iconWithLable, classes }) => (
  <Box component="div" className={classes.root}>
    <Box component="div">
      <Text variant="body1" color="white" fWeight={500} lineHeight={1}>
        {upperText}
      </Text>
    </Box>
    {iconWithLable ? (
      <Box component="div" className={classes.smallIcon} />
    ) : (
      <Box component="div" className={classes.middle}>
        <Box component="div" className={classes.iconStyle} />
      </Box>
    )}
    <Box component="div" className={classes.textCenter}>
      <Text
        variant="caption"
        color="white"
        className={classes.uText}
        lineHeight={1}
      >
        {lowerText}
      </Text>
    </Box>
  </Box>
);

IconLabelUpDown.propTypes = {
  upperText: PropTypes.string,
  lowerText: PropTypes.string,
  iconWithLable: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelUpDown);
