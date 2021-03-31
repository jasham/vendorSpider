/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect } from 'react';
import { element } from 'prop-types';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../header';
import Footer from '../footer';
import { GlobalContext } from '../../../pages/_app';
import {
  SERVICE_LIST,
  GROUPS_LIST,
  CATEGORY_LIST,
  GROUP_NAME,
} from '../../lib/utility/type';
import { subCatService } from '../../lib/services/home';
import LoadingBar from '../loading';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

const Layout = ({ children }) => {
  const globalContext = useContext(GlobalContext);
  const classes = useStyles();
  useEffect(() => {
    subCatService().then((cdata) => {
      const tempArr = [];
      let tempArr2 = [];
      let tempObj = {};
      let tempGid = {};
      let gName = {};
      cdata.data.map((eachData) => {
        if (eachData.sub_category && eachData.icon_url) {
          tempArr2 = [];
          eachData.service.map((serviceData) => {
            tempArr2.push({ id: serviceData._id, label: serviceData.service });
            return serviceData;
          });
          tempObj = { [eachData._id]: tempArr2, ...tempObj };
          tempGid = { [eachData._id]: eachData.group_id, ...tempGid };
          gName = { [eachData.group_id]: eachData.sub_category, ...gName };
          tempArr.push({
            id: eachData._id,
            label: eachData.sub_category,
            icon_url: eachData.icon_url,
            bannerUrl: eachData.banner_url,
            group_id: eachData.group_id,
          });
        }
        return eachData;
      });
      globalContext.allDispatch({
        type: GROUP_NAME,
        value: gName,
      });
      globalContext.allDispatch({
        type: CATEGORY_LIST,
        value: tempArr,
      });
      globalContext.allDispatch({
        type: SERVICE_LIST,
        value: tempObj,
      });
      globalContext.allDispatch({
        type: GROUPS_LIST,
        value: tempGid,
      });
    });
    // if(!socket){
    //     socket = io.connect('http://localhost:8080');
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box id="new" className={classes.root}>
      <Header />
      <Box height="calc(100% - 50px)">{children}</Box>
      <Footer />

      {globalContext.state.loadingBarStatus ? <LoadingBar /> : null}
    </Box>
  );
};

Layout.defaultProps = {};

Layout.propTypes = {
  children: element,
};

export default Layout;
