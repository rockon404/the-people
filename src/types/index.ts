import {AppEventTypes, UserRoles} from '../constants';

export interface AppStorage {
  get: (key: string) => string | undefined;
  set: (key: string, value: any, options?: any) => void;
  delete: (key: string) => void;
}

export interface UserAgent {
  browser: string;
  browserVersion: string;
  isMobile: boolean;
  isBot: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  os: string;
  osVersion: string;
  isLandscape: boolean;
  pixelRatio: number;
}

export interface User {
  id: string;
  slug: string;
  password: string;
  email: string;
  title: string;
  phone: string;
  address: string;
  role: UserRoles;
}

export interface Place {
  slug: string;
  title: string;
  phone: string;
  address: string;
  location: [number, number];
}

export interface AppEvent {
  id: string;
  slug: string;
  type: AppEventTypes;
  title: string;
  place: string;
  image: string;
  date: string;
  created_at: string;
  expires_at: string;
  description: string;
  short_description: string;
  properties?: {
    key: string;
    value: string;
  }[];
}

export interface AppNotification {
  id: string;
  from: string;
  created_at: string;
  expires_at: string;
  slug: string;
  title: string;
  description: string;
}

// Store

export interface GeneralState {

}

export interface AuthState {
  user: User | null;
  isFetching: boolean;
  error: null;
  token: string | null;
}

export interface NotificationsState {
  isFetching: boolean;
  error: null;
  items: AppNotification[];
}

export interface EventsState {
  isFetching: boolean;
  error: null;
  items: AppEvent[];
  linked: {
    places? : { [slug: string]: Place };
  };
}

export interface EventState {
  isFetching: boolean;
  error: null;
  item: AppEvent;
  linked: {
    place?: Place;
  };
}

export interface NotificationState {
  isFetching: boolean;
  error: null;
  item: AppNotification;
  linked: {
    place?: Place[];
    user?: User;
  };
}

export interface StoreState {
  general: GeneralState;
  auth: AuthState;
  events: EventsState;
  event: EventState;
  notifications: NotificationsState;
  notification: NotificationState;
}


