import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import Text from '../text';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: (props) => props.bgColor,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      '& $iconStyle': {
        backgroundImage: (props) => `url(${props.hoverImage})`,
        backgroundSize: '50%',
      },
      '& $uText': {
        color: '#acc138',
      },
    },
  },
  middle: {
    height: 70,
    width: 70,
  },
  iconStyle: {
    backgroundImage: (props) => `url(${props.iconImage})`,
    backgroundSize: '60%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '85%',
  },
  uText: {
    textAlign: 'center',
    display: 'flex',
    lineHeight: 1,
  },
  textCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const IconLabelUpDown = ({ lowerText, classes }) => (
  <Box component="div" className={classes.root}>
    <Box component="div" className={classes.middle}>
      <Box component="div" className={classes.iconStyle} />
    </Box>
    <Box component="div" className={classes.textCenter}>
      <Text
        variant="body2"
        color="#4b485e"
        className={classes.uText}
        lineHeight={1}
      >
        {lowerText}
      </Text>
    </Box>
  </Box>
);

IconLabelUpDown.propTypes = {
  lowerText: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelUpDown);
