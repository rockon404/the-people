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
  created_at: string;
  deleted_at: string;
  last_activity_at: string;
  email: string;
  full_name: string;
}

export interface Place {
  slug: string;
  title: string;
  phone: string;
  address: string;
  location: [number, number];
}

export interface Event {
  slug: string;
  title: string;
  place: string;
  image: string;
  description: string;
  properties: {
    key: string;
    value: string;
  }[];
}

export interface Notification {
  id: string;
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
  items: Notification[];
}

export interface EventsState {
  isFetching: boolean;
  error: null;
  items: Event[];
  linked: {
    places?: Place[];
  };
}


export interface StoreState {
  general: GeneralState;
  auth: AuthState;
  events: EventsState;
  notifications: NotificationsState;
}


