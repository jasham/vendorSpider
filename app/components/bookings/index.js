import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import Router from 'next/router';
import Text from '../text';
import Button from '../button';
import login from '../../lib/services/login';

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

const Bookings = ({ classes, onHandelClose, closeButton }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await login({ emailOrMobile: email, password });
    if (response.result === 'success') {
      Router.push({
        pathname: '/vertical-tab',
      });
    }
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Text variant="h6" fWeight={600} ffamily="Poppins">
          Login
        </Text>
        {closeButton ? (
          <div>
            <CloseIcon onClick={onHandelClose} />
          </div>
        ) : null}
      </Box>
      <Box display="flex" style={{ gap: '10px' }} flexDirection="column">
        <TextField
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <div style={{ marginBottom: '10px' }} /> */}
        <TextField
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Box>
        <Button className={classes.marginTop} onClick={onSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

Bookings.propTypes = {
  onHandelClose: PropTypes.func,
  closeButton: PropTypes.bool,
};

export default withStyles(styles)(Bookings);
