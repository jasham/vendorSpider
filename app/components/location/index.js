/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Box,
  // Paper,
  // DialogTitle,
  Dialog,
  // DialogContent,
  // TextField,
  IconButton,
  Container,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import Text from '../text';
// import Button from '../button';
import MyMap from '../map';

const styles = () => ({
  root: {
    // width : "100vw",
    // height : "100vh",
    // backgroundColor : "rgba(0,0,0,0.3)",
    // display : "flex",
    // justifyContent : "center",
    // alignItems : "center",
    // position : "absolute",
  },
  map: {
    width: '100%',
    minHeight: 400,
    height: 500,
    position: 'relative',
    // [theme.breakpoints.down('md')] :{
    //     height : 300,
    //     minHeight : 300
    // }
  },
  title: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom : 20
  },
});

const Location = ({ classes, handleClose, open }) => {
  // eslint-disable-next-line no-unused-vars
  const [latLan, setLatLan] = useState({});
  const [showLatLan, setShowLatLan] = useState({ lat: 12.9716, lng: 77.5946 });
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const temp = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setLatLan(temp);
    });
  }, []);

  // const setPlace = (v) => {
  //   setValue(v);
  // };
  return (
    <Box className={classes.root}>
      <Dialog
        open={open || false}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="lg"
        style={{
          zIndex: 900,
          minHeight: 600,
        }}
      >
        <Container>
          <Box className={classes.title}>
            <Text variant="h6" ffamily="Poppins">
              Add new address.
            </Text>
            <IconButton aria-label="delete">
              <CloseIcon onClick={handleClose} />
            </IconButton>
          </Box>
        </Container>

        <Box className={classes.map}>
          <MyMap lat={showLatLan.lat} lng={showLatLan.lng} isMarkerShown />
        </Box>
      </Dialog>
    </Box>
  );
};

Location.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default withStyles(styles)(Location);
