import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, CircularProgress } from '@material-ui/core';

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 1000000,
  },
});

const LoadingBar = ({ classes }) => (
  <Box className={classes.root}>
    <CircularProgress />
  </Box>
);

export default withStyles(styles)(LoadingBar);
