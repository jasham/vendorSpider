import React, { useEffect } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Profiles from '../profile';
import OrderCard from '../orderCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  value: PropTypes.oneOfType([PropTypes.any]),
};

const styles = (theme) => ({
  root: {},
  dropdownSelect: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  orderWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,
  },
});

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    backgroundColor: theme.palette.grey['100'],
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom: 30,
    minHeight: 500,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  tabPanel: {
    width: '90%',
    [theme.breakpoints.up('md')]: {
      width: '90%',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}));

const Operations = ({ classes, query }) => {
  const useClasses = useStyles();
  const [value, setValue] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(parseInt(query.id, 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Box className={useClasses.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={useClasses.tabs}
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Orders" {...a11yProps(1)} />
          <Tab label="Address" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0} className={useClasses.tabPanel}>
          <Profiles />
        </TabPanel>
        <TabPanel value={value} index={1} className={useClasses.tabPanel}>
          <Box className={classes.orderWrapper}>
            <Box className={classes.dropdownSelect}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Orders
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  // value={age}
                  // onChange={handleChange}
                  label="Orders"
                >
                  {/* <MenuItem value="">
                                    <em>None</em>
                                </MenuItem> */}
                  <MenuItem value={10}>Past Orders</MenuItem>
                  <MenuItem value={20}>Pending Orders</MenuItem>
                  <MenuItem value={30}>Active Orders</MenuItem>
                  <MenuItem value={40}>Disputed Orders</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <OrderCard />
              <OrderCard />
              <OrderCard />
              <OrderCard />
              <OrderCard />
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2} className={useClasses.tabPanel}>
          Item Three
        </TabPanel>
      </Box>
    </Container>
  );
};

Operations.propTypes = {
  query: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Operations);
