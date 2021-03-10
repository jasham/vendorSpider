/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Container, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import Carousel from 'react-multi-carousel';
import Text from '../../components/text';
import Booking from '../../components/bookings';
import ImageCard from '../../components/imageCard';
import Button from '../../components/button';
import { subCatService } from '../../lib/services/home';
import { getCookie } from '../../lib/utility/apiWrapper';
import Login from '../../components/loginModal';
import SignUp from '../../components/signUp';
import { GlobalContext } from '../../../pages/_app';
import {
  LOGIN_MODAL_STATUS,
  CATEGORY_LIST,
  SIGN_UP_MODAL_STATUS,
  PURCHASE_DATA,
  ALERT_DIALOG,
  ERROR_TITLE,
  ERROR_DESCRIPTION,
  SCHEDULED_BOOK,
} from '../../lib/utility/type';
import AlertDialog from '../../components/alert';
import CustomCarousel from '../../components/carousel';
import IconCard from '../../components/iconCard';

const styles = (theme) => ({
  root: {},
  form: {
    position: 'absolute',
    top: 0,
    width: '100%',
    [theme.breakpoints.between('xs', 'sm')]: {
      position: 'relative',
      marginTop: 20,
    },
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      marginTop: 20,
    },
  },
  topContainer: {
    position: 'relative',
    marginTop: 40,
    paddingBottom: 100,
    [theme.breakpoints.between('xs', 'sm')]: {
      paddingBottom: 20,
    },
  },
  pageTitle: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 15,
  },
  titleText: {
    margin: 0,
    marginRight: 5,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '1.6rem',
    },
  },
  titleText2: {
    margin: 0,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '1.6rem',
    },
  },
  imageBox: {
    width: 270,
    minWidth: 270,
    height: 300,
    backgroundImage: () => `url(/static/images/car_repair.jpg)`,
    backgroundSize: 'cover',
    borderRadius: 10,
    // marginRight : 30
  },
  imageCarousel: {
    display: 'flex',
    flexDirection: 'row',
    // overflow : "hidden",
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  headingWrapper: {
    paddingTop: 20,
    paddingBottom: 15,
    [theme.breakpoints.between(700, 1024)]: {
      paddingTop: 78,
    },
    [theme.breakpoints.up(1024)]: {
      paddingTop: 30,
    },
  },
  bookingWrapper: {
    [theme.breakpoints.between('xs', 'sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
    },
  },
  aboutUsImage: {
    height: 350,
    width: 320,
    backgroundImage: 'url(/static/images/car_repair.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: 10,
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('sm')]: {
      width: 320,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '85%',
    },
  },
  upperDots: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 102,
    height: 120,
    backgroundImage: 'url(/static/images/dots.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
  },
  lowerDots: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 102,
    height: 120,
    backgroundImage: 'url(/static/images/dots.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
  },
  aboutUsWrapper: {
    position: 'relative',
    height: 420,
    width: 420,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      // width : "100%",
      marginTop: 20,
    },
  },
  aboutUsMain: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  aboutUsContent: {
    display: 'flex',
    justifyContent: ' center',
  },
  firstRow: {
    [theme.breakpoints.only('sm')]: {
      paddingBottom: 70,
    },
  },
  commonStyle: {
    marginBottom: 30,
  },
  subscribeWrapper: {
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 30,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  subscribeInputWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  inputWidth: {
    width: '65%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginBottom: 10,
    },
  },
  subscribeButton: {
    width: '100%',
    height: '100%',
  },
  mailBox: {
    backgroundImage: 'url(/static/images/mailBox.svg)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: 200,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  leftBox: {
    width: '65%',
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
    },
  },
  subscribeButtonWrappper: {
    width: '35%',
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
    },
  },
  inputField: {
    width: '90%',
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
    },
  },
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 900, min: 500 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const images = [
  { url: '/static/images/car_repair.jpg' },
  { url: '/static/images/car.jpeg' },
  { url: '/static/images/car_repair.jpg' },
  { url: '/static/images/car.jpeg' },
];
const Home = ({ classes }) => {
  const [categorySelect, setCategorySelect] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentService, setCurrentService] = useState([]);
  //   const [groupId, setGroupId] = useState(null);
  const [serviceList, setServiceList] = useState({});
  const [serviceData, setServiceData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [selectedTime, setSelectedTime] = useState(undefined);
  const [catList, setCatList] = useState(null);
  const [descValue, setDescValue] = useState(undefined);

  const globalContext = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    subCatService().then((cdata) => {
      const tempArr = [];
      let tempArr2 = [];
      let tempObj = {};
      let tempGid = {};
      let tempObj2 = {};
      cdata.data.map((eachData) => {
        if (eachData.sub_category) {
          tempArr2 = [];
          eachData.service.map((sData) => {
            tempArr2.push({
              id: sData._id,
              label: sData.service,
              service_id: sData._id,
            });
            // tempArr3.push(serviceData.service)
            tempObj2 = {
              [eachData._id]: {
                mainService: {
                  [eachData._id]: eachData.sub_category,
                  group_id: eachData.group_id,
                  sub_cat_id: eachData._id,
                  sub_cat_name: eachData.sub_category,
                },
                service_list: tempArr2,
              },
              ...tempObj2,
            };
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
        }
        return eachData;
      });
      setCategorySelect(tempArr);
      setServiceList(tempObj);
      //   setGroupId(tempGid);
      setCatList(tempObj2);
      globalContext.allDispatch({
        type: CATEGORY_LIST,
        value: {
          categories: tempArr,
          services: tempObj,
          cGroups: tempGid,
        },
      });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeCategory = (e) => {
    setCurrentCategory(e.target.value);
    setServiceData(serviceList[e.target.value]);
  };

  const onChangeServices = (e) => {
    setCurrentService(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(String(date));
  };

  const handleTimeChange = (time) => {
    setSelectedTime(String(time));
  };

  const onSubmit = () => {
    if (currentCategory && currentService && selectedDate && selectedTime) {
      if (getCookie('token')) {
        const bookData = { selectedDate, selectedTime, descValue };
        globalContext.allDispatch({
          type: PURCHASE_DATA,
          value: catList[currentCategory],
        });
        globalContext.allDispatch({
          type: SCHEDULED_BOOK,
          value: bookData,
        });
        router.push({
          pathname: '/order',
          query: {
            purchaseData: JSON.stringify(catList[currentCategory]),
            bData: JSON.stringify(bookData),
          },
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

  const onChangeDescription = (e) => {
    setDescValue(e.target.value);
  };

  return (
    <Box>
      <Box className={classes.commonStyle}>
        <Container className={classes.firstRow}>
          <Grid container direction="column" className={classes.topContainer}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              className={classes.headingWrapper}
            >
              <Box className={classes.pageTitle}>
                <Text
                  variant="h4"
                  ffamily="Poppins"
                  fWeight={700}
                  color="#34A76C"
                  className={classes.titleText}
                >
                  Anytime
                </Text>
                <Text
                  variant="h4"
                  ffamily="Poppins"
                  fWeight={700}
                  className={classes.titleText2}
                >
                  {' '}
                  Anywhere
                </Text>
              </Box>
              <Box className={classes.subTitle}>
                <Text variant="body1" ffamily="Poppins" fWeigth={600} color="">
                  We at Our company gives smooth transaction between user and
                  vendor
                </Text>
              </Box>
            </Grid>
            <Grid
              item
              className={classes.imageCarousel}
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <Box className={classes.imageWrapper}>
                <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr // means to render carousel on server-side.
                  infinite
                  autoPlay
                  autoPlaySpeed={2000}
                  // keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
                  deviceType={['tablet']}
                  // dotListClass="custom-dot-list-style"
                  // itemClass="carousel-item-padding-30-px"
                >
                  {images.map((data, index) => (
                    <ImageCard key={index.toString()} image={data.url} />
                  ))}
                </Carousel>
              </Box>
            </Grid>

            <Grid item className={classes.form}>
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
                className={classes.bookingWrapper}
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
                  onChangeDescription={onChangeDescription}
                  descValue={descValue}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className={classes.commonStyle}>
        <Container>
          <Grid container direction="row">
            <Grid
              item
              xs={12}
              sm={6}
              md={7}
              lg={6}
              xl={6}
              className={classes.aboutUsContent}
            >
              <Grid
                container
                direction="column"
                className={classes.aboutUsContent}
              >
                <Grid item>
                  <Box className={classes.pageTitle}>
                    <Text
                      variant="h4"
                      ffamily="Poppins"
                      fWeight={700}
                      color="#34A76C"
                      className={classes.titleText}
                    >
                      About Us
                    </Text>
                  </Box>
                </Grid>
                <Grid item>
                  <Text variant="body2">
                    Folly words widow one downs few age every seven. If miss
                    part by fact he park just shew. Discovered had get
                    considered projection who favourable. Necessary up knowled
                    any chatty can elinor direct for former. Up as meant widow
                    equal an share leasge it tolerably. Unwilling departure
                    education is be dashwoods or an. Use off agreeable law
                    unwilling sir deficient curiosity instantly. Easy mind life
                    fact with see has bore ten. Parisht.{' '}
                  </Text>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={6} xl={6}>
              <Grid
                container
                justify="flex-end"
                direction="row"
                className={classes.aboutUsMain}
              >
                <Box className={classes.aboutUsWrapper}>
                  <Box className={classes.upperDots} />
                  <Box className={classes.aboutUsImage} />
                  <Box className={classes.lowerDots} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className={classes.commonStyle}>
        <Container>
          <Grid container direction="row">
            <CustomCarousel
              title="Best services"
              subTitle="Explore Our Services"
              scrollOffset={220}
            >
              {categorySelect &&
                Array.isArray(categorySelect) &&
                categorySelect.map((data) => (
                  <IconCard
                    key={data.id}
                    indexNo={data.id}
                    serviceName={data.label}
                    imageUrl={data.icon_url}
                  />
                ))}
            </CustomCarousel>
          </Grid>
        </Container>
      </Box>
      <Box className={classes.commonStyle}>
        <Container>
          <Box className={classes.subscribeWrapper}>
            <Box style={{ width: '60%' }} className={classes.leftBox}>
              <Box style={{ marginBottom: 20 }}>
                <Text
                  variant="h4"
                  ffamily="Poppins"
                  fWeight={700}
                  color="#34A76C"
                  className={classes.titleText}
                >
                  Subscribe To Get Latest News
                </Text>
              </Box>
              <Box style={{ marginBottom: 20 }}>
                <Text
                  variant="h6"
                  ffamily="Poppins"
                  fWeight={400}
                  className={classes.titleText}
                >
                  Enter your email address to get our latest news.{' '}
                </Text>
              </Box>
              <Box className={classes.subscribeInputWrapper}>
                <Box className={classes.inputWidth}>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    className={classes.inputField}
                    size="small"
                  />
                </Box>
                <Box className={classes.subscribeButtonWrappper}>
                  <Button className={classes.subscribeButton}>Subscribe</Button>
                </Box>
              </Box>
            </Box>
            <Box className={classes.mailBox} />
          </Box>
        </Container>
      </Box>
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
    </Box>
  );
};

export default withStyles(styles)(Home);
