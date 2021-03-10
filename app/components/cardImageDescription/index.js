import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import Text from '../text';

const styles = {
  root: {
    width: 200,
    padding: 11,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 2,
    cursor: 'pointer',
    boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.1)',
    '&:hover': {
      boxShadow: '0 0 7px 5px rgba(0, 0, 0, 0.1)',
    },
  },
  media: {
    height: 80,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: (props) => `url(${props.image})`,
    marginBottom: 25,
  },
  content: {
    paddingTop: 0,
    paddingBottom: '0px !important',
  },
  text: {
    lineHeight: 1,
  },
};

const CardImageDescription = ({ title, description, classes }) => (
  <Box component="div" className={classes.root}>
    <Box component="div" className={classes.media} />
    <Box component="div">
      <Text variant="body1" fWeight={500} lineHeight={1} color="#4b485e">
        {title}
      </Text>
    </Box>
    <Text variant="caption" lineHeight={1} color="#4b485e">
      {description}
    </Text>
  </Box>
);

CardImageDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardImageDescription);
