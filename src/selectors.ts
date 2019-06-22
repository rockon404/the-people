import { StoreState } from './types';
import { createSelector } from 'reselect';

// General

export const generalSelector = (state: StoreState) => state.general;

// Auth

export const authSelector = (state: any) => state.auth;

export const isSignedInSelector = createSelector(
  authSelector,
  auth => Boolean(auth.user) && Boolean(auth.user.id),
);

export const meSelector = createSelector(
  authSelector,
  auth => auth.user,
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

// Events

export const eventsStateSelector = (state: StoreState) => state.events;

export const eventsListSelector = createSelector(
  eventsStateSelector,
  notifications => notifications.items,
);
