import {AppEvent, Place} from '../types';
import {createRequestActions} from '../utils/reduxHelpers';
import mapAxiosError from '../utils/mapAxiosError';
import {Dispatch} from 'redux';
import { events, places } from '../mockData';

interface EventsPayload {
  events: AppEvent[];
  linked: {
    places: { [slug: string]: Place };
  }
}

export const [
  fetchEventsRequest,
  fetchEventsSucceeded,
  fetchEventsFailed,
] = createRequestActions<EventsPayload>('FETCH_EVENTS');

export const fetchEvents = () => (dispatch: Dispatch) => {
  try {
    dispatch(fetchEventsRequest());

    const linked = {
      places: places.reduce(
        (acc, el) => (acc[el.slug] = el, acc), {} as { [slug: string]: Place },
      ),
    };

    dispatch(fetchEventsSucceeded({ events, linked  }))
  } catch (error) {
    dispatch(fetchEventsFailed(mapAxiosError(error)));
  }
};
