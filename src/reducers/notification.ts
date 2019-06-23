import { createReducer } from 'redux-act';
import { NotificationState } from '../types';
import * as actions from '../actions/notification';
import {fetchFailedHandler, fetchRequestHandler} from '../utils/reduxHelpers';


const initialState: NotificationState = {
  isFetching: false,
  item: null,
  error: null,
  linked: {},
};

const reducer = createReducer<NotificationState>({}, initialState);

reducer.on(actions.fetchNotificationRequest, fetchRequestHandler);

reducer.on(actions.fetchNotificationSucceeded, (state, { notification, linked }) => ({
  ...state,
  item: notification,
  isFetching: false,
  linked,
}));

reducer.on(actions.fetchNotificationFailed, fetchFailedHandler);

export default reducer;
