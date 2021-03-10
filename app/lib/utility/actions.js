import React, { useReducer } from 'react';
import { reducer } from './reducer';
import { store } from './store';
import {
  LOGIN_MODAL_STATUS,
  SIGN_UP_MODAL_STATUS,
  CATEGORY_LIST,
} from './type';

export const signUpStatus = (status) => {
  const [reducerState, dispatch] = useReducer(reducer, store);
  return dispatch({
    type: SIGN_UP_MODAL_STATUS,
    value: status,
  });
};

export const categoiesList = (cData) => {
  const [reducerState, dispatch] = useReducer(reducer, store);
  return dispatch({
    type: CATEGORY_LIST,
    value: cData,
  });
};
