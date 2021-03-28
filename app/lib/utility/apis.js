const COMMON_API = process.env.API_ENDPOINT;

const URLS = {
  SUBCATEGORY: `${COMMON_API}user/sub_category`,
  USERLOGIN: `${COMMON_API}adminlogin`,
  BOOKING_API: `${COMMON_API}user/booking`,
  ADDRESS_API: `${COMMON_API}address`,
  SIGNUP_API: `${COMMON_API}vendorsignup`,
};
export default URLS;
