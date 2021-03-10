import React from 'react';
import { Box, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { CameraAlt } from '@material-ui/icons';
import Buttons from '../button';

const styles = (theme) => ({
  root: {},
  textField: {
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  },
  cell: {
    marginBottom: 20,
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  profilePic: {
    backgroundColor: theme.palette.grey['100'],
    boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.1)',
    height: 100,
    width: 100,
    borderRadius: '50%',
    position: 'relative',
  },
  iconWrapper: {
    position: 'absolute',
    width: 30,
    height: 30,
    right: 0,
    top: '75%',
    right: 5,
  },
  buttonStyle: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  },
});

const Profile = ({ classes }) => {
  return (
    <Box className={classes.root}>
      <Box className={classes.cell}>
        <Box className={classes.profileWrapper}>
          <Box className={classes.profilePic}>
            <Box className={classes.iconWrapper}>
              <CameraAlt style={{ color: '#34a76c' }} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.cell}>
        <TextField
          id="outlined-multiline-static"
          label="Fullname"
          variant="outlined"
          className={classes.textField}
          size="small"
        />
      </Box>
      <Box className={classes.cell}>
        <TextField
          id="outlined-multiline-static"
          label="Email"
          variant="outlined"
          className={classes.textField}
          size="small"
        />
      </Box>
      <Box className={classes.cell}>
        <TextField
          id="outlined-multiline-static"
          label="Password"
          variant="outlined"
          className={classes.textField}
          size="small"
        />
      </Box>
      <Box className={classes.cell}>
        <TextField
          id="outlined-multiline-static"
          label="Mobile No"
          variant="outlined"
          className={classes.textField}
          size="small"
        />
      </Box>
      <Box className={classes.cell}>
        <Buttons className={classes.buttonStyle}>Update</Buttons>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  // eslint-disable-next-line react/forb,id-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
