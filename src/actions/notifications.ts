import { AppNotification } from '../types';
import { createRequestActions } from '../utils/reduxHelpers';
import mapAxiosError from '../utils/mapAxiosError';
import { Dispatch } from 'redux';
import { notifications } from '../mockData';

export const [
  fetchNotificationsRequest,
  fetchNotificationsSucceeded,
  fetchNotificationsFailed,
] = createRequestActions<{ notifications: AppNotification[] }>('FETCH_NOTIFICATIONS');

export const fetchNotifications = () => (dispatch: Dispatch) => {
  try {
    dispatch(fetchNotificationsRequest());
    dispatch(fetchNotificationsSucceeded({ notifications }))
  } catch (error) {
    dispatch(fetchNotificationsFailed(mapAxiosError(error)));
  }
};
