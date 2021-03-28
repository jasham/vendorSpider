import request from '../utility/apiWrapper';

import URLS from '../utility/apis';

const login = async (data) => {
  const loginData = await request({
    url: `${URLS.USERLOGIN}`,
    method: 'post',
    data,
  });
  if (loginData.result === 'success') {
    document.cookie = `token=${loginData.token}`;
    const stringifiedData = JSON.stringify(loginData.data);
    localStorage.setItem('userInfo', stringifiedData);
  }
  return loginData;
};
export default login;
