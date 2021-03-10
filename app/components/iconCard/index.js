import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Text from '../text';

const styles = (theme) => ({
  imageBox: {
    width: 150,
    height: 140,
    boxShadow:
      '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
    borderRadius: 10,
    padding: 20,
    // backgroundImage : props => `url(${props.imageUrl})`,
    // backgroundSize : "contain",
    // backgroundRepeat : "no-repeat",
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 25,
    cursor: 'pointer',
    paddingRight: 20,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      paddingRight: 'unset',
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: 25,
      paddingRight: 20,
    },
  },
  textAlign: {
    textAlign: 'center',
  },
  image: {
    width: '70%',
    height: '70%',
  },
});

const IconCard = ({ classes, serviceName, imageUrl, indexNo }) => {
  const onClickCard = () => {};

  return (
    <Link
      href={{
        pathname: '/services',
        query: { id: indexNo },
      }}
    >
      <Box className={classes.root} onClick={onClickCard}>
        <Box className={classes.imageBox}>
          <img src={imageUrl} alt="img" className={classes.image} />
        </Box>
        <Text
          ffamily="Poppins"
          variant="caption"
          fWeight={600}
          className={classes.textAlign}
        >
          {' '}
          {serviceName}{' '}
        </Text>
      </Box>
    </Link>
  );
};

IconCard.propTypes = {
  serviceName: PropTypes.string,
  imageUrl: PropTypes.string,
  indexNo: PropTypes.string,
};

export default withStyles(styles)(IconCard);
