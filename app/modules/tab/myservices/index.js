import React, { useContext } from 'react';
import { Box } from '@material-ui/core';
import Table from '../../../components/table';
import Buttons from '../../../components/button';
import Modal from './modal';
import { GlobalContext } from '../../../../pages/_app';
import URLS from '../../../lib/utility/apis';
import userinfo from '../../../lib/utility/getUserInfo';
import request from '../../../lib/utility/apiWrapper';
import SimpleBackdrop from '../../../components/backdrop';

const MyServices = () => {
  const globalContext = useContext(GlobalContext);

  const [modalStatus, setModalStatus] = React.useState(false);
  const [venServLi, setVenServLi] = React.useState([]);
  const [loaderStatus, setLoaderStatus] = React.useState(false);

  const onAdd = () => {
    setModalStatus((prev) => !prev);
    setLoaderStatus(true);
  };
  const makeFalseModal = () => {
    setModalStatus((prev) => !prev);
  };

  const retSelVal = async (val) => {
    const temp = {
      vendor_id: userinfo().user_id,
      group_id: val.group_id,
    };
    await request({
      url: `${URLS.VENDOR_ADD_API}`,
      method: 'post',
      data: temp,
    }).then((res) => {
      if (res.result === 'success') {
        const tempArr = [...venServLi];
        tempArr.unshift(res.data);
        setVenServLi(tempArr);
        setLoaderStatus(false);
      }
    });
  };

  React.useEffect(() => {
    request({
      url: `${
        URLS.VENDOR_ADD_API
      }?query={pageSize:${10},currentPage:${1},search:"",vendor_id:'${
        userinfo().user_id
      }'}`,
      method: 'get',
    }).then((res) => {
      setVenServLi(res.data.vendor_group);
    });
  }, []);

  const delRet = (row, indx) => {
    setLoaderStatus(true);
    request({
      // eslint-disable-next-line no-underscore-dangle
      url: `${URLS.VENDOR_ADD_API}/${row._id}`,
      method: 'delete',
    }).then((res) => {
      if (res.result === 'success') {
        const tempArr = [...venServLi];
        tempArr.splice(indx, 1);
        setVenServLi([...tempArr]);
      }
      setLoaderStatus(false);
    });
  };

  const toggleStatus = (index, status) => {
    setLoaderStatus(true);
    request({
      url: `${URLS.VENDOR_ADD_API}`,
      method: 'get',
      params: {
        id: userinfo().user_id,
        status,
      },
    }).then(() => {
      setLoaderStatus(false);
    });
  };
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        marginBottom={2}
      >
        <Buttons onClick={onAdd}>Add</Buttons>
      </Box>
      <Box>
        <Table
          tableData={venServLi}
          delRet={delRet}
          toggleStatus={toggleStatus}
        />
      </Box>
      <Modal
        modalStatus={modalStatus}
        serviceList={globalContext.state.categoryList}
        modalTitle="Request for a service"
        requestLabel="Submit"
        makeFalseModal={makeFalseModal}
        retSelVal={retSelVal}
      />
      <SimpleBackdrop open={loaderStatus} />
    </Box>
  );
};

export default MyServices;
