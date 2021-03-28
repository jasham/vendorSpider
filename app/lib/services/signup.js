import URLS from '../utility/apis';
import request from '../utility/apiWrapper';

const signService = (data) =>
  request({ url: `${URLS.SIGNUP_API}`, method: 'post', data });

export default signService;
