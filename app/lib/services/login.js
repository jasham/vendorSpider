import React from 'react';
import request from '../utility/apiWrapper';
import { GlobalContext } from '../../../pages/_app';
import { AUTH_STATUS } from '../utility/type';
import URLS from '../utility/apis';

const login = async (data) => {
  const globalContext = React.u(GlobalContext);

  const loginData = await request({
    url: `${URLS.USERLOGIN}`,
    method: 'post',
    data,
  });
  if (loginData.result === 'success') {
    document.cookie = `token=${loginData.token}`;
    const stringifiedData = JSON.stringify(loginData.data);
    localStorage.setItem('userInfo', stringifiedData);
    globalContext.allDispatch({
      type: AUTH_STATUS,
      value: true,
    });
  } else if (loginData.result === 'wrongEmail') {
    //
  }
};
export default login;
