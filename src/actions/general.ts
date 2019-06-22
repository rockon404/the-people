import { StoreState } from '../types';
import { Dispatch } from 'redux';
import { isSignedInSelector } from '../selectors';
import { logout } from './auth';
import axios from 'axios';

export function addResponseInterceptor() {
  return async (dispatch: Dispatch<any>, getState: () => StoreState) => {
    const isSignedIn = isSignedInSelector(getState());

    axios.interceptors.response.use(
      res => {
        console.log('[' + res.config.url + '] from cache', res.request.fromCache ? '✅' : '🛑');
        return res;
      },
      error => {
        if (
          error.response &&
          error.response.status === 401 &&
          error.response.data.message === 'Unauthorized' &&
          isSignedIn
        ) {
          dispatch(logout());
        }

        throw error;
      },
    );
  };
}
