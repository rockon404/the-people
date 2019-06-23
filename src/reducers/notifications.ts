import { createReducer } from 'redux-act';
import { NotificationsState } from '../types';
import * as actions from '../actions/notifications';
import {fetchFailedHandler, fetchRequestHandler} from '../utils/reduxHelpers';

const initialState: NotificationsState = {
  isFetching: false,
  error: null,
  items: [],
};

const reducer = createReducer<NotificationsState>({}, initialState);

reducer.on(actions.fetchNotificationsRequest, fetchRequestHandler);

reducer.on(actions.fetchNotificationsSucceeded, (state, { notifications }) => ({
  ...state,
  items: notifications,
}));

reducer.on(actions.fetchNotificationsFailed, fetchFailedHandler);

reducer.on(actions.deleteNotificationRequest, fetchRequestHandler);

reducer.on(actions.deleteNotificationSucceeded, (state, { notifications }) => ({
  ...state,
  items: notifications,
}));

reducer.on(actions.deleteNotificationFailed, fetchFailedHandler);

export default reducer;
