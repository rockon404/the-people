import {AnyAction, Dispatch} from 'redux';
import {StoreState, User} from '../types';
import { RequestHeaders, TOKEN_KEY } from '../constants';
import { createAction } from 'redux-act';
import { createRequestActions } from '../utils/reduxHelpers';
import storage from '../utils/storage.web';
import axios from 'axios';
import {users} from '../mockData';
import {ThunkDispatch} from 'redux-thunk';
import {tokenSelector} from '../selectors';

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

export const [
  loginRequest,
  loginSucceeded,
  loginFailed,
] = createRequestActions<{ user: User, token: string }>('LOGIN');

export const login = (email: string, password: string) => async (dispatch: ThunkDispatch<StoreState, {}, AnyAction>) => {
  try {
    dispatch(loginRequest());

    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
      throw new Error('Wrong password or email');
    }

    dispatch(loginSucceeded({ user, token: user.slug }));
    dispatch(setToken(user.slug));
  } catch (err) {
    dispatch(loginFailed({ message: err.message }));
  }
};

export const setTokenAction = createAction<string>('SET_TOKEN');

export function setToken(token: string) {
  return async (dispatch: Dispatch<any>) => {
    storage.set(TOKEN_KEY, token);
    axios.defaults.headers.common[RequestHeaders.Authorization] = `Bearer ${token}`;
    dispatch(setTokenAction(token));
  };
}

export const [
  fetchUserRequest,
  fetchUserSucceeded,
  fetchUserFailed,
] = createRequestActions<User>('FETCH_USER');

export const fetchUser = () =>
  async (dispatch: ThunkDispatch<StoreState, {}, AnyAction>, getState: () => StoreState) => {
  try {
    dispatch(fetchUserRequest());
    const token = tokenSelector(getState());
    const user = users.find(user => user.slug === token);
    dispatch(fetchUserSucceeded(user));
  } catch (err) {
    dispatch(fetchUserFailed({ message: err.message }));
  }
};