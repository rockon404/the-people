import { Dispatch } from 'redux';
import { StoreState } from '../types';
import { AxiosInstance } from 'axios';
import { RequestHeaders, TOKEN_KEY } from '../constants';
import { createAction } from 'redux-act';
import { createRequestActions } from '../utils/reduxHelpers';
import mapAxiosError from '../utils/mapAxiosError';
import storage from '../utils/storage.web';
import axios from 'axios';

export const logoutAction = createAction('LOGOUT');

export function logout() {
  return async (dispatch: Dispatch<any>) => {

    storage.set(TOKEN_KEY, '');

    if (storage.get(TOKEN_KEY)) {
      storage.set(TOKEN_KEY, '');
    }

    axios.defaults.headers.common[RequestHeaders.Authorization] = '';
    dispatch(logoutAction);
  };
}

export const [requestSecretCodeRequest, requestSecretCodeSucceeded, requestSecretCodeFailed] = createRequestActions(
  'REQUEST_SECRET_CODE',
);

export const requestSecretCode = (email: string) => async (
  dispatch: Dispatch,
  getState: StoreState,
  axios: AxiosInstance,
) => {
  try {
    dispatch(requestSecretCodeRequest());

    const { data } = await axios.post('/auth/email/', { email });

    dispatch(requestSecretCodeSucceeded(data));
  } catch (err) {
    const error = mapAxiosError(err);
    dispatch(requestSecretCodeFailed(error));
  }
};

export const [loginRequest, loginSucceeded, loginFailed] = createRequestActions('LOGIN');

const login = (email: string, secret_code: string) => async (
  dispatch: Dispatch,
  getState: StoreState,
  axios: AxiosInstance,
) => {
  try {
    dispatch(loginRequest());

    const { data } = await axios.post('/auth/email/', { email, secret_code });

    dispatch(loginSucceeded(data));
  } catch (err) {
    const error = mapAxiosError(err);
    dispatch(loginFailed(error));
  }
};

const setTokenAction = createAction<string>('SET_TOKEN');

export function setToken(token: string) {
  return async (dispatch: Dispatch<any>) => {
    storage.set(TOKEN_KEY, token);
    axios.defaults.headers.common[RequestHeaders.Authorization] = `Bearer ${token}`;
    dispatch(setTokenAction(token));
  };
}

export function register(email: string, full_name: string) {
  return async (dispatch: Dispatch<any>) => {
    try {
      const res = await axios.post('/users/', {
        user: { email, full_name },
      });
      if (res.data) await dispatch(setToken(res.data.token));
      return res;
    } catch (err) {
      return mapAxiosError(err);
    }
  };
}
