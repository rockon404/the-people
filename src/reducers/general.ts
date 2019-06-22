import { createReducer } from 'redux-act';
import { GeneralState } from '../types';
import * as actions from '../actions/general';

const initialState: GeneralState = {};

const reducer = createReducer<GeneralState>({}, initialState);

export default reducer;
