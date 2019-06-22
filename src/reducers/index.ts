import { combineReducers } from 'redux';
import general from './general';
import auth from './auth';
import notifications from './notifications';
import events from './events';
import event from './event';

import { StoreState } from '../types';

export default combineReducers<StoreState>({
  general,
  auth,
  notifications,
  events,
  event,
});
