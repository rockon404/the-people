import { createReducer } from 'redux-act';
import { GeneralState } from '../types';
import * as actions from '../actions/general';
import { eventTypes } from '../mockData';

const initialState: GeneralState = {
  eventTypes,
};

const reducer = createReducer<GeneralState>({}, initialState);

export default reducer;
