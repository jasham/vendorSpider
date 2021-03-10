import URLS from '../utility/apis';
import request, { getCookie } from '../utility/apiWrapper';

export const getAddress = () =>
  request({
    url: `${URLS.ADDRESS_API}/${getCookie('user_id')}`,
    method: 'get',
  });

export const addAddress = (data) =>
  request({ url: `${URLS.ADDRESS_API}`, method: 'post', data });

export const removeAddress = (data) =>
  request({ url: `${URLS.ADDRESS_API}`, method: 'post', data });
