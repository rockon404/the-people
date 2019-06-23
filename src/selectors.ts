import { StoreState } from './types';
import { createSelector } from 'reselect';

// General

export const generalSelector = (state: StoreState) => state.general;

export const eventTypesSelector = createSelector(
  generalSelector,
  general => general.eventTypes,
);

// Auth

export const authSelector = (state: any) => state.auth;

export const isSignedInSelector = createSelector(
  authSelector,
  auth => Boolean(auth.user) && Boolean(auth.user.id),
);

export const userSelector = createSelector(
  authSelector,
  auth => auth.user,
);

export const authErrorSelector = createSelector(
  authSelector,
  auth => auth.error,
);

export const tokenSelector = createSelector(
  authSelector,
  auth => auth.token,
);

// Notifications

export const notificationsStateSelector = (state: StoreState) => state.notifications;

export const notificationsListSelector = createSelector(
  notificationsStateSelector,
  notifications => notifications.items,
);

// Notification

export const notificationStateSelector = (state: StoreState) => state.notification;

export const notificationSelector = createSelector(
  notificationStateSelector,
  notification => notification.item,
);

export const notificationLinkedDataSelector = createSelector(
  notificationStateSelector,
  notification => notification.linked,
);

export const notificationUserSelector = createSelector(
  notificationLinkedDataSelector,
  linked => linked.user,
);

// Events

export const eventsStateSelector = (state: StoreState) => state.events;

export const eventsListSelector = createSelector(
  eventsStateSelector,
  events => events.items,
);

export const eventsLinkedDataSelector = createSelector(
  eventsStateSelector,
  events => events.linked,
);

export const eventsPlacesSelector = createSelector(
  eventsLinkedDataSelector,
  linked => linked.places,
);

// Event

export const eventStateSelector = (state: StoreState) => state.event;

export const eventSelector = createSelector(
  eventStateSelector,
  event => event.item,
);

export const eventLinkedDataSelector = createSelector(
  eventStateSelector,
  event => event.linked,
);

export const eventPlaceSelector = createSelector(
  eventLinkedDataSelector,
  linked => linked.place,
);