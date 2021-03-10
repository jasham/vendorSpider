import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import Text from '../text';

const styles = (theme) => ({
  scrollWrapper: {
    width: '100%',
    display: 'flex',
    // justifyContent: 'space-between',
    flexDirection: 'row',
    overflow: 'hidden',
    scrollBehavior: 'smooth',
    padding: 30,
    gap: 15,
    [theme.breakpoints.down(767)]: {
      width: '100%',
      overflowX: 'scroll',
    },
    [theme.breakpoints.up(768)]: {
      width: '100%',
      overflowX: 'hidden',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      marginBottom: 25,
    },
  },
  previous: {
    height: 45,
    width: 45,
    borderRadius: '50%',
    backgroundImage: 'url(/static/images/right_arrow.png)',
    backgroundSize: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#B8B8B8',
    boxShadow: '1px 3px 13px rgba(0, 0, 0, 0.16)',
    transform: 'rotate(180deg)',
  },
  next: {
    height: 45,
    width: 45,
    borderRadius: '50%',
    backgroundImage: 'url(/static/images/right_arrow.png)',
    backgroundSize: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#B8B8B8',
    boxShadow: '1px 3px 13px rgba(0, 0, 0, 0.16)',
  },
  navStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: 65,
    [theme.breakpoints.down(767)]: {
      display: 'none',
    },
    [theme.breakpoints.up(768)]: {
      display: 'flex',
    },
  },
  hiddenNavStyle: {
    padding: 15,
    display: 'none',
    [theme.breakpoints.down(767)]: {
      display: 'block',
    },
    [theme.breakpoints.up(768)]: {
      display: 'none',
    },
  },
  iconButton: {
    padding: 0,
    marginLeft: 20,
    [theme.breakpoints.down(768)]: {
      marginLeft: 0,
    },
    [theme.breakpoints.up(768)]: {
      marginLeft: 20,
    },
  },
  cardWrapper: {
    [theme.breakpoints.down(786)]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  titleStyle: {
    [theme.breakpoints.down(767)]: {
      lineHeight: 1,
    },
    [theme.breakpoints.up(768)]: {
      lineHeight: 'inherit',
    },
  },
  scrollWrapper2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  subWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  commonTStyle: {
    margin: 0,
    lineHeight: 1,
  },
});

const Carousel = React.forwardRef(
  ({ classes, title, children, scrollOffset, subTitle }, ref) => {
    const useRefs = React.useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextDiv = () => {
      useRefs.current.scrollLeft += scrollOffset;
      if (currentIndex < children.length - 1)
        setCurrentIndex((prev) => prev + 1);
    };

    const previousDiv = () => {
      useRefs.current.scrollLeft -= scrollOffset;
      if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
    };

    return (
      <Box ref={ref} style={{ width: '100%' }}>
        <Box className={classes.head}>
          <Box className={classes.subWrapper}>
            <Box>
              <Text
                ffamily="Poppins"
                fWeight={500}
                variant="body1"
                className={classes.commonTStyle}
              >
                {title}
              </Text>
            </Box>
            <Box>
              <Text
                ffamily="Poppins"
                fWeight={700}
                variant="h4"
                color="#34A76C"
                className={classes.commonTStyle}
              >
                {subTitle}
              </Text>
            </Box>
          </Box>
          <Box className={classes.navStyle}>
            <IconButton className={classes.iconButton} onClick={previousDiv}>
              <Box className={classes.previous} />
            </IconButton>
            <IconButton className={classes.iconButton} onClick={nextDiv}>
              <Box className={classes.next} />
            </IconButton>
          </Box>
        </Box>
        <Box className={classes.cardWrapper}>
          <Box className={classes.hiddenNavStyle}>
            <IconButton className={classes.iconButton} onClick={previousDiv}>
              <Box className={classes.previous} />
            </IconButton>
          </Box>
          <Box className={classes.scrollWrapper} ref={useRefs}>
            {children}
          </Box>
          <Box className={classes.scrollWrapper2}>{children[currentIndex]}</Box>
          <Box className={classes.hiddenNavStyle}>
            <IconButton className={classes.iconButton} onClick={nextDiv}>
              <Box className={classes.next} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    );
  },
);

Carousel.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  // titleColor: PropTypes.string,
  scrollOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default withStyles(styles)(Carousel);
