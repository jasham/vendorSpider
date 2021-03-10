import {
  LOGIN_MODAL_STATUS,
  SIGN_UP_MODAL_STATUS,
  CLOSE_MAP,
  ADDRESS_LIST,
  SELECTED_ADDRESS_ID,
  ALERT_DIALOG,
  ERROR_TITLE,
  ERROR_DESCRIPTION,
  LOADING_BAR_STATUS,
  SELECTED_ADDRESS_DATA,
  CATEGORY_LIST,
  SERVICE_LIST,
  GROUPS_LIST,
  BOOKING_ALERT_STATUS,
  AUTH_STATUS,
  PURCHASE_DATA,
  SCHEDULED_BOOK,
} from './type';

export const reducer = (state, action) => {
  switch (action.type) {
    case SIGN_UP_MODAL_STATUS:
      return { ...state, signUpStatus: action.value };
    case LOGIN_MODAL_STATUS:
      return { ...state, loginStatus: action.value };
    case ALERT_DIALOG:
      return { ...state, alertStatus: action.value };
    case ERROR_DESCRIPTION:
      return { ...state, errorDescription: action.value };
    case ERROR_TITLE:
      return { ...state, errorTitle: action.value };
    case CATEGORY_LIST:
      return { ...state, categoryList: action.value };
    case SERVICE_LIST:
      return { ...state, serviceList: action.value };
    case GROUPS_LIST:
      return { ...state, groupList: action.value };
    case BOOKING_ALERT_STATUS:
      return { ...state, bookingAlertStatus: action.value };
    case AUTH_STATUS:
      return { ...state, auth: action.value };
    case LOADING_BAR_STATUS:
      return { ...state, loadingBarStatus: action.value };
    case CLOSE_MAP:
      return { ...state, closeMap: action.value };
    case ADDRESS_LIST:
      return { ...state, addressList: action.value };
    case SELECTED_ADDRESS_ID:
      return { ...state, selectedAddressId: action.value };
    case SELECTED_ADDRESS_DATA:
      return { ...state, selectedAddressData: action.value };
    case PURCHASE_DATA:
      return { ...state, purchaseData: action.value };
    case SCHEDULED_BOOK:
      return { ...state, scheduleData: action.value };
    default:
      return state;
  }
};
