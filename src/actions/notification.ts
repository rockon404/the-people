import {AppNotification, User} from '../types';
import { createRequestActions } from '../utils/reduxHelpers';
import mapAxiosError from '../utils/mapAxiosError';
import { Dispatch } from 'redux';
import { notifications, users } from '../mockData';

interface NotificationPayload {
  notification: AppNotification;
  linked: {
    user?: User;
  }
}

export const [
  fetchNotificationRequest,
  fetchNotificationSucceeded,
  fetchNotificationFailed,
] = createRequestActions<NotificationPayload>('FETCH_NOTIFICATION');

export const fetchNotificationBySlug = (slug: string) => (dispatch: Dispatch) => {
  try {
    dispatch(fetchNotificationRequest());
    const notification = notifications.find(n => n.slug === slug);
    const user = users.find(user => user.slug === notification.from);
    dispatch(fetchNotificationSucceeded({ notification, linked: { user } }))
  } catch (error) {
    dispatch(fetchNotificationFailed(mapAxiosError(error)));
  }
};