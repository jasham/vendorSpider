import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  root: {},
  imageBox: {
    width: 270,
    minWidth: 270,
    height: 300,
    backgroundImage: (props) => `url(${props.image})`,
    backgroundSize: 'cover',
    borderRadius: 10,
    [theme.breakpoints.between('xs', 'sm')]: {
      // width : 'calc(100% - '+  10 + 'px)',
      minWidth: 'calc(100% - ' + 10 + 'px)',
      height: 200,
      backgroundRepeat: 'no-repeat',
      margin: 'auto',
    },
    [theme.breakpoints.between(500, 700)]: {
      width: 150,
      minWidth: 150,
      height: 160,
      backgroundRepeat: 'no-repeat',
    },
    [theme.breakpoints.between(280, 300)]: {
      width: 150,
      minWidth: 'calc(100% - ' + 10 + 'px)',
      height: 160,
      backgroundRepeat: 'no-repeat',
    },
    [theme.breakpoints.between(700, 1024)]: {
      width: 150,
      minWidth: 'calc(100% - ' + 10 + 'px)',
      height: 240,
      backgroundRepeat: 'no-repeat',
    },
    [theme.breakpoints.up(1024)]: {
      minWidth: 'calc(100% - ' + 20 + 'px)',
      height: 300,
      backgroundRepeat: 'no-repeat',
    },
  },
});

const ImageCard = ({ classes }) => {
  return <Box className={classes.imageBox} />;
};

ImageCard.propTypes = {
  image: PropTypes.string,
};

export default withStyles(styles)(ImageCard);
