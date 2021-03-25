import { Box, Container } from '@material-ui/core';
import React, { useState } from 'react';
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
  const [currentPage, setCurrentPage] = useState();
  const showCurrentPage = () => {
    switch (currentPage) {
      case 0:
        return <OrderTab />;
      case 1:
        return <div>My Services</div>;
      default:
        return <OrderTab />;
    }
  };
  return (
    <Container>
      <div>
        <div className={classes.drawer}>
          <MiniDrawer>
            <Box marginTop={2}>{showCurrentPage()}</Box>
          </MiniDrawer>
        </div>
        <div className={classes.tab}>
          <VerticalTab
            returnName={(val) => setCurrentPage(val)}
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
                children: <div>About Us</div>,
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
