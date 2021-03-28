import React, { useContext, useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Link from '../link';
import { GlobalContext } from '../../../pages/_app';
import {
  LOGIN_MODAL_STATUS,
  SIGN_UP_MODAL_STATUS,
} from '../../lib/utility/type';
import signService from '../../lib/services/signup';

const styles = () => ({
  root: {},
  textField: {
    marginBottom: 20,
  },
  linkWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  linkButton: {
    marginRight: 20,
  },
});

const SignUp = ({ classes, open, handleClose }) => {
  const globalContext = useContext(GlobalContext);

  const onLogin = () => {
    globalContext.allDispatch({
      type: SIGN_UP_MODAL_STATUS,
      value: false,
    });
    globalContext.allDispatch({
      type: LOGIN_MODAL_STATUS,
      value: true,
    });
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await signService({
      name,
      mobile,
      email,
      password,
    });
    if (response.result === 'success') {
      // eslint-disable-next-line no-console
      console.log(response);
      setEmail('');
      setPassword('');
      setName('');
      setMobile('');
      handleClose();
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText />
          <Box className={classes.textField}>
            <TextField
              id="name"
              label="Name"
              type="text"
              fullWidth
              value={name}
              variant="outlined"
              onChange={(event) => setName(event.target.value)}
            />
          </Box>
          <Box className={classes.textField}>
            <TextField
              id="mobile"
              label="Mobile"
              type="text"
              fullWidth
              value={mobile}
              variant="outlined"
              onChange={(event) => setMobile(event.target.value)}
            />
          </Box>
          <Box className={classes.textField}>
            <TextField
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Box>
          <Box className={classes.textField}>
            <TextField
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Box>
          <Box className={classes.linkWrapper}>
            <Box className={classes.linkButton}>
              <Link href="#" onClick={onLogin}>
                Already have an account! Login
              </Link>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={(event) => onSubmit(event)} color="primary">
            Submit
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

SignUp.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default withStyles(styles)(SignUp);
