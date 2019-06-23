import { AppNotification } from '../types';
import { createRequestActions } from '../utils/reduxHelpers';
import mapAxiosError from '../utils/mapAxiosError';
import { Dispatch } from 'redux';
import { notifications } from '../mockData';

export const [
  fetchNotificationRequest,
  fetchNotificationSucceeded,
  fetchNotificationFailed,
] = createRequestActions<{ notification: AppNotification }>('FETCH_NOTIFICATION');

export const fetchNotificationBySlug = (slug: string) => (dispatch: Dispatch) => {
  try {
    dispatch(fetchNotificationRequest());
    const notification = notifications.find(n => n.slug === slug);
    dispatch(fetchNotificationSucceeded({ notification }))
  } catch (error) {
    dispatch(fetchNotificationFailed(mapAxiosError(error)));
  }
};