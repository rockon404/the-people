import {AppEvent} from '../types';
import {createRequestActions} from '../utils/reduxHelpers';
import mapAxiosError from '../utils/mapAxiosError';
import {Dispatch} from 'redux';
import { events } from '../mockData';

export const [
  fetchEventRequest,
  fetchEventSucceeded,
  fetchEventFailed,
] = createRequestActions<{ event: AppEvent }>('FETCH_EVENT');

export const fetchEventBySlug = (slug: string) => (dispatch: Dispatch) => {
  try {
    dispatch(fetchEventRequest());
    const event = events.find(e => e.slug === slug);
    dispatch(fetchEventSucceeded({ event }))
  } catch (error) {
    dispatch(fetchEventFailed(mapAxiosError(error)));
  }
};