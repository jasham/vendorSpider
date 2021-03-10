import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Text from '../text';

const styles = {
  root: {
    width: 211,
    padding: 11,
  },
  subroot: {
    width: 200,
    padding: '20.8px 8px 11px 15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 2,
    minHeight: 200,
    cursor: 'pointer',
    position: 'relative',
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
  rating: {
    color: '#acc138',
  },
  quotes: {
    backgroundImage: 'url(/static/images/Path_64924.png)',
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    position: 'absolute',
    top: 42,
    left: -10,
    width: 100,
    height: 20,
  },
  comment: {
    marginTop: 20,
    lineHeight: 1,
  },
};

const FeedbackCard = ({ comment, name, classes }) => (
  <Box component="div" className={classes.root}>
    <Box component="div" className={classes.subroot}>
      <Box>
        <Rating className={classes.rating} />
        <Box className={classes.quotes} />
        <Box className={classes.comment}>
          <Text variant="caption" lineHeight={1} color="#4b485e">
            {comment}
          </Text>
        </Box>
      </Box>
      <Box>
        <Text variant="caption" lineHeight={1} color="#34a76c">
          -{name}
        </Text>
      </Box>
    </Box>
  </Box>
);

FeedbackCard.propTypes = {
  comment: PropTypes.string,
  name: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedbackCard);
