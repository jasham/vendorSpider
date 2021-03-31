const COMMON_API = process.env.API_ENDPOINT;
const { API_CONTEXTPATH } = process.env;

const URLS = {
  SUBCATEGORY: `${COMMON_API}${API_CONTEXTPATH}user/sub_category`,
  USERLOGIN: `${COMMON_API}${API_CONTEXTPATH}adminlogin`,
  BOOKING_API: `${COMMON_API}${API_CONTEXTPATH}user/booking`,
  ADDRESS_API: `${COMMON_API}${API_CONTEXTPATH}address`,
  SIGNUP_API: `${COMMON_API}${API_CONTEXTPATH}vendorsignup`,
  VENDOR_ADD_API: `${COMMON_API}${API_CONTEXTPATH}vendor`,
  VENDOR_SERVICES_LIST_API: `${COMMON_API}${API_CONTEXTPATH}vendor/service_group`,
};
export default URLS;
