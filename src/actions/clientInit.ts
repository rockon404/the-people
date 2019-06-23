import { Dispatch } from 'redux';
import { addResponseInterceptor } from './general';
import storage from '../utils/storage.web';
import { TOKEN_KEY } from '../constants';
import {fetchUser, setToken} from './auth';
import { fetchEvents } from './events';
import { fetchNotifications } from './notifications';


export default function clientInit() {
  return async (dispatch: Dispatch<any>) => {
    let token = storage.get(TOKEN_KEY);
    dispatch(addResponseInterceptor());
    if (token) {
      await dispatch(setToken(token));
      await dispatch(fetchUser());
    }
    dispatch(fetchEvents());
    dispatch(fetchNotifications());
  };
}
