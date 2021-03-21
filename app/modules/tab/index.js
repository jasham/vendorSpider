import { Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VerticalTab from '../../components/vertical-tab';
import MiniDrawer from '../../components/drawer';
import OrderTab from './orders';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  tab: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  drawer: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
const Tab = () => {
  const classes = useStyles();
  return (
    <Container>
      <div>
        <div className={classes.drawer}>
          <MiniDrawer>drwer</MiniDrawer>
        </div>
        <div className={classes.tab}>
          <VerticalTab
            data={[
              {
                label: 'Orders',
                children: <OrderTab />,
              },
              {
                label: 'MyServices',
                children: <div>MyServices</div>,
              },
              {
                label: 'Profile',
                children: <div>Profile</div>,
              },
              {
                label: 'Help',
                children: <div>Help</div>,
              },
              {
                label: 'About US',
                children: <div>About US</div>,
              },
              {
                label: 'Logout',
                children: <div>Logout</div>,
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
};

export default Tab;
