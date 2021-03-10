import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import Text from '../text';
import Link from '../link';

const styles = (theme) => ({
  root: {
    padding: 20,
    paddingBottom: 10,
    boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
  },
  upper: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    lineHeight: 1,
  },
  total: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  upperWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const OrderCard = ({ classes }) => {
  const useClasses = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.upperWrapper}>
        <Box className={classes.upper}>
          <Text
            variant="body1"
            fWeight={500}
            ffamily="Poppins"
            className={classes.text}
            color="#34a76c"
          >
            Mechanic
          </Text>
          <Text variant="caption" ffamily="Poppins" className={classes.text}>
            180 B Hazrat Nizamuddin Colony
          </Text>
          <Text variant="caption" ffamily="Poppins" className={classes.text}>
            Booked on 12th Jan 2020
          </Text>
          <Box>
            <Link href={'#'}>View Deatils</Link>
          </Box>
        </Box>
        <Box>
          <Text variant="caption" ffamily="Poppins" className={classes.text}>
            Delivered
          </Text>
        </Box>
      </Box>
      <Box className={classes.total}>
        <Text variant="caption" ffamily="Poppins" className={classes.text}>
          Total Paid 20 Rs
        </Text>
      </Box>
    </Box>
  );
};

OrderCard.propTypes = {
  // eslint-disable-next-line react/forb,id-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrderCard);
