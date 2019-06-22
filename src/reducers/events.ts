import { createReducer } from 'redux-act';
import { EventsState } from '../types';
import * as actions from '../actions/events';
import {fetchFailedHandler, fetchRequestHandler} from '../utils/reduxHelpers';


const initialState: EventsState = {
  isFetching: false,
  items: [],
  error: null,
  linked: {},
};

const reducer = createReducer<EventsState>({}, initialState);

reducer.on(actions.fetchEventsRequest, fetchRequestHandler);

reducer.on(actions.fetchEventsSucceeded, (state, { events }) => ({
  ...state,
  items: events,
}));

reducer.on(actions.fetchEventsFailed, fetchFailedHandler);

export default reducer;
