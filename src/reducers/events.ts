import { createReducer } from 'redux-act';
import { EventsState } from '../types';
import * as actions from '../actions/events';
import {fetchFailedHandler, fetchRequestHandler} from '../utils/reduxHelpers';


const initialState: EventsState = {
  isFetching: false,
  items: [],
  error: null,
  linked: {
    places: {},
  },
};

const reducer = createReducer<EventsState>({}, initialState);

reducer.on(actions.fetchEventsRequest, fetchRequestHandler);

reducer.on(actions.fetchEventsSucceeded, (state, { events, linked }) => ({
  ...state,
  items: events,
  linked,
}));

reducer.on(actions.fetchEventsFailed, fetchFailedHandler);

export default reducer;
