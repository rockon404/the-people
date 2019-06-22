import { createReducer } from 'redux-act';
import { EventsState } from '../types';

const initialState: EventsState = {
  isFetching: false,
  items: [],
  error: null,
  linked: {},
};

const reducer = createReducer<EventsState>({}, initialState);

export default reducer;
