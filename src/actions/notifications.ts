import {AppNotification, StoreState} from '../types';
import { createRequestActions } from '../utils/reduxHelpers';
import mapAxiosError from '../utils/mapAxiosError';
import { Dispatch } from 'redux';
import { notifications } from '../mockData';
import {notificationsListSelector} from '../selectors';

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

export const [
  deleteNotificationRequest,
  deleteNotificationSucceeded,
  deleteNotificationFailed,
] = createRequestActions<{ notifications: AppNotification[] }>('DELETE_NOTIFICATION');

export const deleteNotification = (slug: string) => (dispatch: Dispatch, getState: () => StoreState) => {
  try {
    dispatch(deleteNotificationRequest());
    const notifications = notificationsListSelector(getState());
    const newNotifications = notifications.filter(n => n.slug !== slug);
    dispatch(deleteNotificationSucceeded({ notifications: newNotifications }))
  } catch (error) {
    dispatch(deleteNotificationFailed(mapAxiosError(error)));
  }
};