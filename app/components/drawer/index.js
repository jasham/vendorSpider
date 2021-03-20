import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  IconButton,
  Collapse,
  Divider,
  List,
  AppBar,
  Toolbar,
  Drawer,
  ListItem,
  ListItemText,
  Box,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import menuData from './nav';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#34a76c',
  },
  toolbars: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  appBarShift: {
    // marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {},
  hide: {
    display: 'none',
  },
  toolbar: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  sectionDesktop: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '50px',
  },
  input: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'inline-flex',
      width: '0%',
      transition: 'width 1s, border 1s',
      '&:hover': {
        width: '70%',
        border: 'solid 1px',
        borderRadius: '3px',
      },
      '& .MuiInputBase-root': {
        border: 0,
      },
    },
  },
  search: {
    '& > * path': {
      fill: '#ffffff',
    },
  },
  checkout: {
    '& > path': {
      fill: '#ffffff',
    },
  },
  img: {
    [theme.breakpoints.down('sm')]: {
      width: 100,
    },
    [theme.breakpoints.up('sm')]: {
      width: 150,
    },
  },
  secondBox: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      padding: '10px',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  secondInput: {
    width: '100%',
  },
  drawer: {
    [theme.breakpoints.between('xs', 'md')]: {
      display: 'block',
      // marginBottom: 20,
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
      marginBottom: 'unset',
    },
  },
  webHeader: {
    [theme.breakpoints.between('xs', 'md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      // minHeight: '100vh',
    },
  },
  // toolBar: {
  //   [theme.breakpoints.down('sm')]: {
  //     minHeight: theme.mixins.toolbar.minHeight + 50,
  //     marginBottom: 10,
  //   },
  //   [theme.breakpoints.up('sm')]: {
  //     ...theme.mixins.toolbar,
  //     marginBottom: 'unset',
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     minHeight: 'unset',
  //     marginBottom: 'unset',
  //   },
  // },
}));

const MiniDrawer = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [sideMenuItems, setSideMenuItems] = React.useState([...menuData]);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = (event, index) => {
    event.preventDefault();
    setSideMenuItems(() => {
      const final = sideMenuItems;
      final[index].expand = !final[index].expand;
      return [...final];
    });
  };
  const handleInClick = (event, title, key, subTitle) => {
    event.preventDefault();
    setSideMenuItems(() => {
      const menus = sideMenuItems.map((item) =>
        item.title === title
          ? {
              ...item,
              subHeaders: {
                ...item.subHeaders,
                [key]: [
                  ...item.subHeaders[key].map((changeExpandItem) =>
                    changeExpandItem.subTitle === subTitle
                      ? {
                          ...changeExpandItem,
                          expand: !changeExpandItem.expand,
                        }
                      : { ...changeExpandItem },
                  ),
                ],
              },
            }
          : { ...item },
      );
      return [...menus];
    });
  };
  return (
    <>
      <Box style={{ minHeight: '100vh' }}>
        <Box className={classes.webHeader}>webheader</Box>
        <Box className={classes.drawer}>
          <AppBar
            position="fixed"
            className={clsx(classes.root, classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar className={classes.toolbars}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src="/static/images/homepage/Csmart_white.svg"
                  alt="csmart"
                  className={classes.img}
                />
              </div>
            </Toolbar>
          </AppBar>
          <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem button>
                <ListItemText primary="Personal" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Business" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Find a Store" />
              </ListItem>
              <ListItem button>
                {/* <Link href="#">
                  <Links color="inherit"> */}
                <ListItemText primary="Login" />
                {/* </Links>
                </Link> */}
              </ListItem>
              <ListItem button>
                {/* <Link href="#">
                  <Links color="inherit"> */}
                <ListItemText primary="Register" />
                {/* </Links>
                </Link> */}
              </ListItem>
              <Divider />
              {sideMenuItems.map((text, index) => (
                <React.Fragment key={index.toString()}>
                  <ListItem
                    button
                    key={index.toString()}
                    onClick={(e) => handleClick(e, index)}
                  >
                    <ListItemText primary={text.title} />
                    {text.expand ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse
                    in={Boolean(text.expand)}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List disablePadding>
                      {Object.keys(text.subHeaders).map(
                        (subHeadersMenu) =>
                          text.subHeaders[subHeadersMenu] &&
                          Array.isArray(text.subHeaders[subHeadersMenu]) &&
                          text.subHeaders[subHeadersMenu].length > 0 &&
                          text.subHeaders[subHeadersMenu].map((menu, i) => (
                            <li key={`${menu.subTitle}-${i.toString()}`}>
                              <ListItem
                                button
                                className={classes.nested}
                                onClick={(event) =>
                                  handleInClick(
                                    event,
                                    text.title,
                                    subHeadersMenu,
                                    menu.subTitle,
                                  )
                                }
                              >
                                <ListItemText primary={menu.subTitle} />
                                {menu.expand ? <ExpandLess /> : <ExpandMore />}
                              </ListItem>
                              <Collapse
                                in={Boolean(menu.expand)}
                                timeout="auto"
                                unmountOnExit
                              >
                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    padding: '20px',
                                    gap: '20px',
                                  }}
                                  id="sub-menu-div"
                                >
                                  {menu.subTitleMenus.map((subTitleLabel) => (
                                    // <Link
                                    //   href="#"
                                    //   passHref
                                    //   key={subTitleLabel.label}
                                    // >
                                    //   <Links color="inherit">
                                    <ListItemText
                                      primary={subTitleLabel.label}
                                      key={subTitleLabel.label}
                                    />
                                    //   </Links>
                                    // </Link>
                                  ))}
                                </div>
                              </Collapse>
                            </li>
                          )),
                      )}
                    </List>
                  </Collapse>
                </React.Fragment>
              ))}
              <ListItem button>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Drawer>
        </Box>
        <main className={classes.toolbar}>{children}</main>
      </Box>
    </>
  );
};

export default MiniDrawer;
