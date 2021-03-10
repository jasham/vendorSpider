import React, { useContext } from 'react';
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

const styles = (theme) => ({
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
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
            />
          </Box>
          <Box className={classes.textField}>
            <TextField
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
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
          <Button onClick={handleClose} color="primary">
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
