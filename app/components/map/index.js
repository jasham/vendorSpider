import React, { useState, useContext } from 'react';
import { Box, Container, Switch, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker,
} from 'react-google-maps';
import Geocode from 'react-geocode';
import Autocomplete from 'react-google-autocomplete';
import PropTypes from 'prop-types';
import Text from '../text';
import Button from '../button';
import { getCookie } from '../../lib/utility/apiWrapper';
import { GlobalContext } from '../../../pages/_app';
import {
  LOADING_BAR_STATUS,
  CLOSE_MAP,
  ADDRESS_LIST,
} from '../../lib/utility/type';
import { addAddress } from '../../lib/services/address';

Geocode.setApiKey('AIzaSyAKXtMAv24joUs0vMvYdOOXIuewWebbCyw');
Geocode.enableDebug();

const styles = () => ({
  root: {},
  autoComplete: {
    // backgroundColor : "red",
    width: '100%',
    padding: 12,
    '&:focus': {
      outline: '1px solid transparent',
      border: '2px solid #34A76C',
      borderRadius: 5,
    },
  },
  autoCompWrapper: {
    marginBottom: 20,
    marginTop: 20,
  },
  useCurrent: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
});

const MyMapComponent = ({ classes, lat, lng }) => {
  const [mapPosition, setMapPosition] = useState({ lat, lng });
  const [markerPosition, setMarkerPosition] = useState({ lat, lng });
  const [address, setAddress] = useState(null);
  const [address2, setAddress2] = useState(null);
  const [showCurrLocation, setShowCurrentLocation] = useState(false);
  const globalContext = useContext(GlobalContext);

  const onInfoWindowClose = () => {};

  const onCurrentLocation = () => {
    if (!showCurrLocation) {
      let temp;
      globalContext.allDispatch({
        type: LOADING_BAR_STATUS,
        value: true,
      });
      navigator.geolocation.getCurrentPosition((position) => {
        temp = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        Geocode.fromLatLng(temp.lat, temp.lng).then(
          (response) => {
            setAddress(response.results[0].formatted_address);
            setMapPosition(temp);
            setMarkerPosition(temp);
            globalContext.allDispatch({
              type: LOADING_BAR_STATUS,
              value: false,
            });
          },
          () => {},
        );
      });
    } else {
      setAddress(null);
    }
    setShowCurrentLocation(!showCurrLocation);
  };

  const onMarkerDragEnd = (event) => {
    const newLat = event.latLng.lat();
    const newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng).then(
      (response) => {
        setAddress(response.results[0].formatted_address);
        // const address = response.results[0].formatted_address,
        //       addressArray =  response.results[0].address_components
        setMapPosition({ lat: newLat, lng: newLng });
        setMarkerPosition({ lat: newLat, lng: newLng });
      },
      () => {},
    );
  };

  const onPlaceSelected = (place) => {
    const latValue = place.geometry.location.lat();
    const lngValue = place.geometry.location.lng();
    setAddress(place.formatted_address);
    setMapPosition({ lat: latValue, lng: lngValue });
    setMarkerPosition({ lat: latValue, lng: lngValue });
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const onChangeAddress2 = (e) => {
    setAddress2(e.target.value);
  };

  const onAdd = () => {
    globalContext.allDispatch({
      type: LOADING_BAR_STATUS,
      value: true,
    });
    if (address) {
      const tempVal = {
        address1: address,
        address2,
        latitude: markerPosition.lat,
        longitude: markerPosition.lng,
        user_id: getCookie('user_id'),
      };
      addAddress(tempVal).then((data) => {
        globalContext.allDispatch({
          type: LOADING_BAR_STATUS,
          value: false,
        });
        const tempArr = globalContext.state.addressList;
        tempArr.splice(0, 0, data.data);
        // ADDRESS_LIST
        globalContext.allDispatch({
          type: ADDRESS_LIST,
          value: tempArr,
        });
        globalContext.allDispatch({
          type: CLOSE_MAP,
          value: false,
        });
      });
    }
  };
  const AsyncMap = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: mapPosition.lat, lng: mapPosition.lng }}
      >
        {/* InfoWindow on top of marker */}
        <InfoWindow
          onClose={onInfoWindowClose}
          position={{
            lat: markerPosition.lat + 0.0018,
            lng: markerPosition.lng,
          }}
        >
          <div>
            <span style={{ padding: 0, margin: 0 }}>{address}</span>
          </div>
        </InfoWindow>
        {/* Marker */}
        <Marker
          name="Dolores park"
          draggable
          onDragEnd={onMarkerDragEnd}
          position={{ lat: markerPosition.lat, lng: markerPosition.lng }}
        />
        <Marker />
        {/* For Auto complete Search Box */}
        <Container>
          <Box className={classes.useCurrent}>
            <Text
              variant="body2"
              style={{ marginRight: 10, marginBottom: 0 }}
              ffamily="Poppins"
            >
              Use Current Location
            </Text>
            <Switch
              checked={showCurrLocation}
              onChange={onCurrentLocation}
              name="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Box>
          <Box className={classes.autoCompWrapper}>
            <Autocomplete
              onPlaceSelected={onPlaceSelected}
              className={classes.autoComplete}
              types={['(regions)']}
              placeholder={address}
              componentRestrictions={{ country: 'in' }}
              disabled={showCurrLocation}
            />
          </Box>
          <Box style={{ marginBottom: 15 }}>
            <TextField
              disabled
              id="outlined-basic"
              label="Address 1"
              variant="outlined"
              size="small"
              style={{ width: '100%' }}
              value={address}
              onChange={onChangeAddress}
            />
          </Box>
          <Box style={{ marginBottom: 15 }}>
            <TextField
              id="outlined-multiline-static"
              label="Address 2"
              multiline
              rows={2}
              variant="outlined"
              style={{ width: '100%' }}
              onChange={onChangeAddress2}
              value={address2}
            />
          </Box>
          <Box style={{ paddingBottom: 20 }}>
            <Button onClick={onAdd}>Add</Button>
          </Box>
        </Container>
      </GoogleMap>
    )),
  );

  return (
    <AsyncMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKXtMAv24joUs0vMvYdOOXIuewWebbCyw&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `30%` }} />}
    />
  );
};

MyMapComponent.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

export default withStyles(styles)(MyMapComponent);
