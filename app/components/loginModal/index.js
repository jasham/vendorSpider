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
  ALERT_DIALOG,
  ERROR_TITLE,
  ERROR_DESCRIPTION,
  AUTH_STATUS,
} from '../../lib/utility/type';
import AlertDialog from '../alert';
import { validateEmail } from '../../lib/utility/common';
import request from '../../lib/utility/apiWrapper';
import URLS from '../../lib/utility/apis';

// import login from '../../lib/services/login';

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

const Login = ({ classes, open, handleClose }) => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const globalContext = useContext(GlobalContext);

  const errorFunc = (title, description) => {
    globalContext.allDispatch({
      type: ERROR_DESCRIPTION,
      value: description,
    });
    globalContext.allDispatch({
      type: ERROR_TITLE,
      value: title,
    });
    globalContext.allDispatch({
      type: ALERT_DIALOG,
      value: true,
    });
  };

  const onSignUp = () => {
    globalContext.allDispatch({
      type: SIGN_UP_MODAL_STATUS,
      value: true,
    });
    globalContext.allDispatch({
      type: LOGIN_MODAL_STATUS,
      value: false,
    });
  };

  const login = async (data) => {
    const loginData = await request({
      url: `${URLS.USERLOGIN}`,
      method: 'post',
      data,
    }).then((res) => {
      if (res.result === 'success') {
        document.cookie = `token=${res.data.token}`;
        document.cookie = `user_id=${res.data.user_id}`;
        document.cookie = `uid=${res.data.uid}`;
        globalContext.allDispatch({
          type: AUTH_STATUS,
          value: true,
        });
        globalContext.allDispatch({
          type: LOGIN_MODAL_STATUS,
          value: false,
        });
      } else if (loginData.result === 'wrongEmail') {
        globalContext.allDispatch({
          type: ERROR_DESCRIPTION,
          value: 'Please enter correct email.',
        });
        globalContext.allDispatch({
          type: ERROR_TITLE,
          value: 'Wrong credentials.',
        });
        globalContext.allDispatch({
          type: ALERT_DIALOG,
          value: true,
        });
      } else if (loginData.result === 'wrongPassword') {
        globalContext.allDispatch({
          type: ERROR_DESCRIPTION,
          value: 'Please enter correct password.',
        });
        globalContext.allDispatch({
          type: ERROR_TITLE,
          value: 'Wrong credentials.',
        });
        globalContext.allDispatch({
          type: ALERT_DIALOG,
          value: true,
        });
      }
    });
  };

  const onSubmit = () => {
    if (email && password) {
      if (validateEmail(email)) {
        if (password.length > 7) {
          const temp = {
            emailOrMobile: email,
            password,
          };
          login(temp);
        } else {
          errorFunc(
            'Incorrect Password',
            'Minimum password length is 8 charachters.',
          );
        }
      } else {
        errorFunc(
          'Incorrect Email',
          'Please enter correct email and try again.',
        );
      }
    } else {
      errorFunc('Missing Fields', 'Please enter all mandatory fields.');
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
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText />
          <Box className={classes.textField}>
            <TextField
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box className={classes.linkWrapper}>
            <Box className={classes.linkButton}>
              <Link href="#">Forgot Password</Link>
            </Box>
            <Box className={classes.linkButton}>
              <Link href="#" onClick={onSignUp}>
                Don&apos;t have account! Sign Up
              </Link>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onSubmit} color="primary">
            Submit
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <AlertDialog
        open={globalContext.state.alertStatus}
        title={globalContext.state.errorTitle}
        description={globalContext.state.errorDescription}
      />
    </div>
  );
};

Login.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default withStyles(styles)(Login);
