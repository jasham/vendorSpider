/* eslint-disable no-underscore-dangle */
import React, { useContext, useState, useEffect } from 'react';
import {
  Box,
  Container,
  Collapse,
  ListItem,
  ListItemText,
  List,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import Buttons from '../../components/button';
import { GlobalContext } from '../../../pages/_app';
import Text from '../../components/text';
import BookingDialog from '../../components/bookingDialog';
import {
  ALERT_DIALOG,
  LOGIN_MODAL_STATUS,
  BOOKING_ALERT_STATUS,
  ERROR_DESCRIPTION,
  ERROR_TITLE,
  SIGN_UP_MODAL_STATUS,
} from '../../lib/utility/type';
import Booking from '../../components/bookings';
import { subCatService } from '../../lib/services/home';
import { getCookie } from '../../lib/utility/apiWrapper';
import Login from '../../components/loginModal';
import SignUp from '../../components/signUp';
import AlertDialog from '../../components/alert';

const styles = (theme) => ({
  root: {},
  banner: {
    backgroundImage: (props) => `url(${props.bannerImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: 300,
    borderRadius: 10,
    boxShadow:
      '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
    marginTop: 20,
    marginBottom: 20,
    position: 'relative',
  },
  subBanner: {
    position: 'absolute',
    width: '100%',
    // height : "100%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 30,
  },
  button: {
    width: 100,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    fontFamily: 'Poppins',
  },
  listHeadText: {
    '.MuiListItemText-multiline': {
      fontFamily: 'Poppins',
    },
  },
});

const ServicePage = ({ classes, query }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(true);
  const [categorySelect, setCategorySelect] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [groupId, setGroupId] = useState(null);
  const [serviceList, setServiceList] = useState({});
  const globalContext = useContext(GlobalContext);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentService, setCurrentService] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bgUrl, setBgUrl] = useState(null);
  const [serviceName, setServiceName] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [serviceDescription, setServiceDesciption] = useState(null);

  useEffect(() => {
    subCatService().then((cdata) => {
      const tempArr = [];
      let tempArr2 = [];
      let tempObj = {};
      let tempGid = {};
      if (query.id) {
        cdata.data.map((eachData) => {
          if (
            eachData.sub_category &&
            eachData.icon_url &&
            query.id === eachData._id
          ) {
            tempArr2 = [];
            eachData.service.map((sData) => {
              tempArr2.push({
                id: sData._id,
                label: sData.service,
              });
              return sData;
            });
            tempObj = { [eachData._id]: tempArr2, ...tempObj };
            tempGid = { [eachData._id]: eachData.group_id, ...tempGid };
            tempArr.push({
              id: eachData._id,
              label: eachData.sub_category,
              icon_url: eachData.icon_url,
              bannerUrl: eachData.banner_url,
            });
            setBgUrl(eachData.banner_url);
            setServiceName(eachData.sub_category);
            setServiceDesciption('Description');
          }
          return eachData;
        });
        setCategorySelect(tempArr);
        setServiceList(tempObj);
        setGroupId(tempGid);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickCollapse = () => {
    setOpen(!open);
  };

  const onClickBook = () => {
    globalContext.allDispatch({
      type: BOOKING_ALERT_STATUS,
      value: true,
    });
  };

  const onChangeCategory = (e) => {
    setCurrentCategory(e.target.value);
    setServiceData(serviceList[e.target.value]);
  };

  const onChangeServices = (e) => {
    setCurrentService(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const onSubmit = () => {
    if (currentCategory && currentService && selectedDate && selectedTime) {
      if (getCookie('token')) {
        router.push({
          path: '/order',
          query: '{ ...currentCategory }',
        });
      } else {
        globalContext.allDispatch({
          type: LOGIN_MODAL_STATUS,
          value: true,
        });
      }
    } else {
      globalContext.allDispatch({
        type: ERROR_DESCRIPTION,
        value: 'Please enter all mandatory fields.',
      });
      globalContext.allDispatch({
        type: ERROR_TITLE,
        value: 'Missing Fields',
      });
      globalContext.allDispatch({
        type: ALERT_DIALOG,
        value: true,
      });
    }
  };

  const closeLogin = () => {
    globalContext.allDispatch({
      type: LOGIN_MODAL_STATUS,
      value: false,
    });
  };

  const closeSignUp = () => {
    globalContext.allDispatch({
      type: SIGN_UP_MODAL_STATUS,
      value: false,
    });
  };

  const handleCloseBookingDialog = () => {
    globalContext.allDispatch({
      type: BOOKING_ALERT_STATUS,
      value: false,
    });
  };

  return (
    <Container>
      <Box
        className={classes.banner}
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <Box className={classes.subBanner}>
          <Buttons className={classes.button} onClick={onClickBook}>
            Book Now
          </Buttons>
        </Box>
      </Box>
      <Box>
        <Text ffamily="Poppins" fWeight={500} variant="h6">
          {serviceName}
        </Text>
        <Text ffamily="Poppins" variant="body2" component="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting.
        </Text>
      </Box>
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItem button onClick={onClickCollapse}>
          <ListItemText
            disableTypography
            primary={
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
              </Text>
            }
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {/* <List component="div" variant="caption" disablePadding>
                        <ListItem button className={classes.nested}> */}
          <Text className={classes.nested} variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          {/* </ListItem>
                    </List> */}
        </Collapse>
      </List>
      <BookingDialog
        open={globalContext.state.bookingAlertStatus}
        title={globalContext.state.errorTitle}
        description={globalContext.state.errorDescription}
        handleClose={handleCloseBookingDialog}
      >
        <Booking
          categoryData={categorySelect}
          onChangeCategory={onChangeCategory}
          currentCategory={currentCategory}
          currentService={currentService}
          onChangeServices={onChangeServices}
          serviceData={serviceData}
          handleDateChange={handleDateChange}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          handleTimeChange={handleTimeChange}
          onSubmit={onSubmit}
          closeButton
          onHandelClose={handleCloseBookingDialog}
        />
      </BookingDialog>
      <Login open={globalContext.state.loginStatus} handleClose={closeLogin} />
      <SignUp
        open={globalContext.state.signUpStatus}
        handleClose={closeSignUp}
      />
      <AlertDialog
        open={globalContext.state.alertStatus}
        title={globalContext.state.errorTitle}
        description={globalContext.state.errorDescription}
      />
    </Container>
  );
};

ServicePage.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  bannerImage: PropTypes.string,
  query: PropTypes.object,
};

export default withStyles(styles)(ServicePage);
