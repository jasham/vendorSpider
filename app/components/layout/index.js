/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect } from 'react';
import { element } from 'prop-types';
import { Box } from '@material-ui/core';
import Header from '../header';
import Footer from '../footer';
import { GlobalContext } from '../../../pages/_app';
import {
  SERVICE_LIST,
  GROUPS_LIST,
  CATEGORY_LIST,
} from '../../lib/utility/type';
import { subCatService } from '../../lib/services/home';
import LoadingBar from '../loading';

const Layout = ({ children }) => {
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    subCatService().then((cdata) => {
      const tempArr = [];
      let tempArr2 = [];
      let tempObj = {};
      let tempGid = {};
      cdata.data.map((eachData) => {
        if (eachData.sub_category && eachData.icon_url) {
          tempArr2 = [];
          eachData.service.map((serviceData) => {
            tempArr2.push({ id: serviceData._id, label: serviceData.service });
            return serviceData;
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
    <Box id="new">
      <Header />
      {children}
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
