import URLS from '../utility/apis';
import request, { getCookie } from '../utility/apiWrapper';

export const getAddress = () =>
  request({
    url: `${URLS.ADDRESS_API}user/booking`,
    method: 'post',
  });
