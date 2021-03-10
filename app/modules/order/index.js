/* eslint-disable no-underscore-dangle */
import React, { useEffect, useContext } from 'react';
import { Box, Grid, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import AddressCard from '../../components/addressCard';
import Text from '../../components/text';
import Button from '../../components/button';
import Location from '../../components/location';
import { getAddress } from '../../lib/services/address';
import { GlobalContext } from '../../../pages/_app';
import {
  CLOSE_MAP,
  ADDRESS_LIST,
  PURCHASE_DATA,
  SCHEDULED_BOOK,
} from '../../lib/utility/type';
import request, { getCookie } from '../../lib/utility/apiWrapper';
import URLS from '../../lib/utility/apis';

const styles = (theme) => ({
  root: {
    marginTop: 20,
  },
  addressWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 600,
    gap: 14,
    boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    padding: 30,
    marginTop: 20,
    marginBottom: 20,
    overflowY: 'scroll',
    [theme.breakpoints.down('md')]: {
      height: 300,
      overflowX: 'scroll',
    },
    [theme.breakpoints.up('md')]: {
      height: 600,
      overflowY: 'scroll',
    },
  },
  calculationWrapper: {
    width: '80%',
    height: 600,
    boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.between('sm', 'md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
  },
  calculationBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  priceWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  serviceDescription: {
    display: 'flex',
    flexDirection: 'column',
    // borderBottom : "1px solid rgba(0,0,0,0.3) ",
    width: '100%',
    // paddingBottom : 5
  },
  finalPrice: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
  },
  serviceLeft: {
    width: '10%',
  },
  serviceRight: {
    width: '10%',
  },
  button: {
    width: 'auto',
    paddingLeft: 10,
    paddingRight: 10,
  },
  upper: {
    height: '100%',
    overflowY: 'scroll',
  },
  lower: {
    height: '30%',
  },
  title: {
    marginBottom: 40,
  },
});

const Order = ({ classes, query }) => {
  const globalContext = useContext(GlobalContext);
  const [purchaseData, setPurchaseData] = React.useState(null);

  useEffect(() => {
    const tempVal = JSON.parse(query.purchaseData);
    // const bData = JSON.parse(query.bookData);
    // console.log('Kathal', query.bData);
    setPurchaseData(tempVal);
    getAddress().then((addressList) => {
      const tempArr = [];
      addressList.data.map((adderData) => {
        const aData = { ...adderData };
        aData.selected = false;
        return tempArr.push(aData);
      });
      globalContext.allDispatch({
        type: ADDRESS_LIST,
        value: tempArr,
      });
    });
    globalContext.allDispatch({
      type: PURCHASE_DATA,
      value: tempVal,
    });
    globalContext.allDispatch({
      type: SCHEDULED_BOOK,
      value: JSON.parse(query.bData),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addAddress = () => {
    // setOpen(true)
    globalContext.allDispatch({
      type: CLOSE_MAP,
      value: true,
    });
  };

  const handleClose = () => {
    // setOpen(false)
    globalContext.allDispatch({
      type: CLOSE_MAP,
      value: false,
    });
  };

  const onPayNow = () => {};

  const onCashOnDelivery = async () => {
    console.log('ginger', globalContext.state);
    if (globalContext.state.selectedAddressData) {
      if (globalContext.state.purchaseData.mainService) {
        const tempBooking = {
          user_id: getCookie('user_id'),
          sub_category_id:
            globalContext.state.purchaseData.mainService.sub_cat_id,
          scheduled_date: globalContext.state.scheduleData.selectedDate,
          scheduled_time: globalContext.state.scheduleData.selectedTime,
          description: globalContext.state.scheduleData.descValue,
          address_id: globalContext.state.selectedAddressData._id,
          serviceIds: globalContext.state.purchaseData.service_list,
          group_id: globalContext.state.purchaseData.mainService.group_id,
        };

        const loginData = await request({
          url: `${URLS.BOOKING_API}`,
          method: 'post',
          data: tempBooking,
        }).then((res) => {
          console.log('Data is booked', res);
        });
      } else {
        // select service
      }
    } else {
      // select address pop up
    }
  };

  const onRemoveItem = (id) => {
    const serviceList = { ...purchaseData };
    purchaseData.service_list.map((data, index) => {
      if (data.id === id) {
        serviceList.service_list.splice(index, 1);
      }
      return data;
    });
    globalContext.allDispatch({
      type: PURCHASE_DATA,
      value: serviceList,
    });
    setPurchaseData(serviceList);
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container direction="row" justify="space-between">
          <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
            <Box className={classes.addressWrapper}>
              <AddressCard onClickDiv={addAddress} />
              {globalContext.state.addressList.map((adderList) => (
                <AddressCard
                  aData={adderList}
                  adderListId={adderList._id}
                  selected={adderList.selected}
                  address1={adderList.address1}
                  address2={adderList.address2}
                  onClickDiv={addAddress}
                  key={adderList._id}
                />
              ))}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
            className={classes.calculationBox}
          >
            <Box className={classes.calculationWrapper}>
              <Box className={classes.upper}>
                <Box className={classes.title}>
                  <Text variant="body1" fWeight={700} ffamily="Poppins">
                    {purchaseData && purchaseData.mainService.sub_cat_name}
                  </Text>
                </Box>
                {purchaseData &&
                  purchaseData.service_list.map((data) => (
                    <Box className={classes.priceWrapper} key={data.id}>
                      <Box className={classes.serviceDescription}>
                        <Box>
                          <Text
                            variant="caption"
                            fWeight={300}
                            ffamily="Poppins"
                          >
                            {data.label}
                          </Text>
                        </Box>
                      </Box>
                      <Box>
                        <CloseIcon onClick={() => onRemoveItem(data.id)} />
                      </Box>
                    </Box>
                  ))}
              </Box>
              <Box className={classes.lower}>
                <Box className={classes.priceWrapper}>
                  {/* <Box className={classes.serviceLeft}></Box> */}
                  <Box className={classes.finalPrice}>
                    <Box>Total</Box>
                  </Box>
                  <Box className={classes.serviceRight}>$120</Box>
                </Box>
                <Box className={classes.priceWrapper}>
                  {/* <Box className={classes.serviceLeft}></Box> */}
                  <Box className={classes.finalPrice}>
                    <Box>Discount</Box>
                  </Box>
                  <Box className={classes.serviceRight}>$10</Box>
                </Box>
                <Box className={classes.priceWrapper}>
                  {/* <Box className={classes.serviceLeft}></Box> */}
                  <Box className={classes.finalPrice}>
                    <Box>Payable</Box>
                  </Box>
                  <Box className={classes.serviceRight}>$2</Box>
                </Box>
                <Box className={classes.priceWrapper}>
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      width: '100%',
                      gap: 15,
                    }}
                  >
                    <Button className={classes.button} onClick={onPayNow}>
                      Pay Now
                    </Button>
                    <Button
                      className={classes.button}
                      onClick={onCashOnDelivery}
                    >
                      Cash On Delivery
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Location open={globalContext.state.closeMap} handleClose={handleClose} />
    </Box>
  );
};

Order.propTypes = {
  query: PropTypes.object,
};

export default withStyles(styles)(Order);
