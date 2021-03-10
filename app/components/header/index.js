/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useRouter } from 'next/router';
import Button from '../button';
import { getCookie } from '../../lib/utility/apiWrapper';
// import { signUpStatus } from '../../lib/utility/actions';
// import { store } from '../../lib/utility/store';
import {
  LOGIN_MODAL_STATUS,
  SIGN_UP_MODAL_STATUS,
  AUTH_STATUS,
} from '../../lib/utility/type';
// import { reducer } from '../../lib/utility/reducer';
import { GlobalContext } from '../../../pages/_app';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appBar: {
    backgroundColor: '#FFFFFF',
    boxShadow: 'unset',
    padding: 0,
  },
  navLink: {
    marginRight: 15,
  },
  linkRoot: {
    width: 150,
    [theme.breakpoints.down('md')]: {
      width: 80,
    },
    [theme.breakpoints.up('md')]: {
      width: 150,
    },
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [reducerState, dispatch] = useReducer(reducer, store);
  const globalContext = useContext(GlobalContext);
  const isMenuOpen = Boolean(anchorEl);
  const router = useRouter();

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    switch (event.currentTarget.innerText) {
      case 'Profile':
        router.push({
          pathname: '/operations',
          query: {
            id: 0,
          },
        });
        break;
      case 'Orders':
        router.push({
          pathname: '/operations',
          query: {
            id: 1,
          },
        });
        break;
      case 'Logout':
        document.cookie = 'token=';
        globalContext.allDispatch({
          type: AUTH_STATUS,
          value: false,
        });
        break;
      default:
        return true;
    }
    return true;
  };

  useEffect(() => {
    const tempAuth = getCookie('token');
    if (getCookie('token')) {
      globalContext.allDispatch({
        type: AUTH_STATUS,
        value: true,
      });
    }
    setAuth(tempAuth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signUpAction = () => {
    globalContext.allDispatch({ type: SIGN_UP_MODAL_STATUS, value: true });
  };

  const loginAction = () => {
    globalContext.allDispatch({
      type: LOGIN_MODAL_STATUS,
      value: true,
    });
  };

  const renderMenu = (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>Orders</MenuItem>
      <MenuItem onClick={handleClose}>Help</MenuItem>
      <MenuItem name="logout" onClick={handleClose}>
        Logout
      </MenuItem>
    </Menu>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Logo
          </Typography>
          {globalContext.state.auth ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <AccountCircle />
              </IconButton>
            </div>
          ) : (
            <Box>
              <div className={classes.sectionDesktop}>
                <Box className={classes.navLink}>
                  <Button
                    className={classes.linkRoot}
                    variant="outlined"
                    backgroundcolor="transparent"
                    onClick={loginAction}
                  >
                    Login
                  </Button>
                </Box>
                <Box className={classes.navLink}>
                  <Button className={classes.linkRoot} onClick={signUpAction}>
                    Sign Up
                  </Button>
                </Box>
              </div>
              <div className={classes.sectionMobile}>
                <Box className={classes.navLink}>
                  <Button
                    className={classes.linkRoot}
                    variant="outlined"
                    backgroundcolor="transparent"
                    onClick={loginAction}
                  >
                    Login
                  </Button>
                </Box>
                <Box className={classes.navLink}>
                  <Button className={classes.linkRoot} onClick={signUpAction}>
                    Sign Up
                  </Button>
                </Box>
              </div>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
