import {AppEvent, Place} from '../types';
import {createRequestActions} from '../utils/reduxHelpers';
import mapAxiosError from '../utils/mapAxiosError';
import {Dispatch} from 'redux';
import { events, places } from '../mockData';

interface EventPayload {
  event: AppEvent;
  linked: {
    place: Place;
  }
}

export const [
  fetchEventRequest,
  fetchEventSucceeded,
  fetchEventFailed,
] = createRequestActions<EventPayload>('FETCH_EVENT');

export const fetchEventBySlug = (slug: string) => (dispatch: Dispatch) => {
  try {
    dispatch(fetchEventRequest());
    const event = events.find(e => e.slug === slug)
    const place = places.find(place => place.slug === event.place);
    dispatch(fetchEventSucceeded({ event, linked: { place } }))
  } catch (error) {
    dispatch(fetchEventFailed(mapAxiosError(error)));
  }
};