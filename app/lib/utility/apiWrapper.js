import axios from 'axios';

// import { getGeoLocation, IP } from './geo-coordinates';
// eslint-disable-next-line import/no-cycle
// import { logout } from './logout';

const { v4: uuidv4 } = require('uuid');

export const timeStamp = new Date().getTime();
export const commonHeaders = {
  destination: 'MOM',
  source: 'portal',
  srDate: timeStamp,
};
/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: `${process.env.API_URL}`,
});
export const uuidGenerator = () => uuidv4().toString(16);
export const getCookie = (cname) => {
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

/**
 * Request Wrapper with default success/error actions
 */

const request = async (options) => {
  const onSuccess = (response) =>
    /* await axios
.post('/logger', response.data.response)
.then((res) => res)
.catch((err) => err); */
    response.data;
  const onError = (error) => {
    const servicerResponse = error && error.response && error.response.data;
    const errorresponse = servicerResponse && servicerResponse.response;
    if (
      servicerResponse &&
      error.response.status === 401 &&
      servicerResponse.result &&
      servicerResponse.result.arguments &&
      servicerResponse.result.arguments[0].errorCode === 'INVALID_TOKEN'
    ) {
      //   logout();
    }
    if (
      errorresponse &&
      error.response.status === 401 &&
      errorresponse.result &&
      errorresponse.result.arguments &&
      errorresponse.result.arguments[0].errorCode === 'INVALID_TOKEN'
    ) {
      //   logout();
    }
    if (errorresponse && typeof errorresponse !== 'undefined') {
      return Promise.reject(errorresponse.result);
    }
    if (servicerResponse && typeof servicerResponse !== 'undefined') {
      return Promise.reject(servicerResponse.result);
    }
    return Promise.reject((error && error) || servicerResponse.result);
  };
  try {
    const x = getCookie('token');
    const userId = getCookie('user_id');
    const uid = getCookie('uid');
    const headers = { ...options.headers };
    if (x) {
      headers.token = x;
      headers.authorization = `Bearer ${x}`;
      headers.user_id = userId;
      headers.uid = uid;
    }

    // let address = window.localStorage.getItem('address');
    // if (address === undefined || address === null || address === '') {
    //   address = await IP();
    // }
    // const permission = await navigator.permissions.query({
    //   name: 'geolocation',
    // });
    // if (permission.state !== 'denied') {
    //   const location = await getGeoLocation();
    //   if (
    //     location &&
    //     Object.prototype.hasOwnProperty.call(location, 'latitude')
    //   ) {
    //     headers.latitude = `${location.latitude}`;
    //     headers.longitude = `${location.longitude}`;
    //   } else {
    //     headers.latitude = '';
    //     headers.longitude = '';
    //   }
    // } else {
    //   headers.latitude = '';
    //   headers.longitude = '';
    // }
    // headers.clientAddress = address;
    const response = await client({
      ...options,
      headers: { ...headers, ...commonHeaders, correlationId: uuidGenerator() },
    });
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

export default request;
