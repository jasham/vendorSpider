import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent } from '@material-ui/core/';
import Text from '../text';

const useStyles = makeStyles(() => ({
  root: {
    width: 175,
    paddingTop: 11,
    cursor: 'pointer',
    boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.1)',
    '&:hover': {
      boxShadow: '0 0 7px 5px rgba(0, 0, 0, 0.1)',
    },
  },
  media: {
    height: 225,
  },
  content: {
    paddingTop: 0,
    paddingBottom: '0px !important',
  },
  text: {
    marginTop: -5,
  },
}));

const ItemCard = ({ image }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} />
      <CardContent className={classes.content}>
        <Text variant="caption" color="#acc138">
          Phones
        </Text>
        <Text variant="body1" fWeight={500} lineHeight={1}>
          Phones
        </Text>
      </CardContent>
    </Card>
  );
};

ItemCard.propTypes = {
  image: PropTypes.string,
};

export default ItemCard;
