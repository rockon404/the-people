import {AppEvent} from '../types';
import {createRequestActions} from '../utils/reduxHelpers';
import mapAxiosError from '../utils/mapAxiosError';
import {Dispatch} from 'redux';
import { events } from '../mockData';

export const [
  fetchEventsRequest,
  fetchEventsSucceeded,
  fetchEventsFailed,
] = createRequestActions<{ events: AppEvent[] }>('FETCH_EVENTS');

export const fetchEvents = () => (dispatch: Dispatch) => {
  try {
    dispatch(fetchEventsRequest());
    dispatch(fetchEventsSucceeded({ events }))
  } catch (error) {
    dispatch(fetchEventsFailed(mapAxiosError(error)));
  }
};
