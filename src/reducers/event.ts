import { createReducer } from 'redux-act';
import { EventState } from '../types';
import * as actions from '../actions/event';
import {fetchFailedHandler, fetchRequestHandler} from '../utils/reduxHelpers';


const initialState: EventState = {
  isFetching: false,
  item: null,
  error: null,
  linked: {},
};

const reducer = createReducer<EventState>({}, initialState);

reducer.on(actions.fetchEventRequest, fetchRequestHandler);

reducer.on(actions.fetchEventSucceeded, (state, { event, linked }) => ({
  ...state,
  item: event,
  linked,
}));

reducer.on(actions.fetchEventFailed, fetchFailedHandler);

export default reducer;
