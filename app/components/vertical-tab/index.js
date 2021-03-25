import React from 'react';
import PropTypes, { any, arrayOf, func, objectOf } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: '100%' }}
    >
      {value === index && <Box padding="10px">{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.oneOfType([PropTypes.any]).isRequired,
  value: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

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
    height: '100%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    '& .MuiTabs-scrollable': {
      overflowX: 'unset !important',
    },
  },
  tabLabel: {
    textTransform: 'none',
    // alignItems: 'flex-start',
    '& span': {
      alignItems: 'flex-start',
    },
  },
}));

const VerticalTab = ({ data, className, returnName }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    returnName(newValue);
    setValue(newValue);
  };

  return (
    <div className={clsx(classes.root, className)}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        id="main-tab"
      >
        {data.map((item, idx) => (
          <Tab
            label={item.label}
            {...a11yProps(idx)}
            key={idx.toString()}
            className={classes.tabLabel}
          />
        ))}
      </Tabs>
      {data.map((item, idx) => (
        <TabPanel value={value} index={idx}>
          {item.children}
        </TabPanel>
      ))}
    </div>
  );
};
VerticalTab.propTypes = {
  data: arrayOf(objectOf(any)),
  returnName: func,
};
export default VerticalTab;
